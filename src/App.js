import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import './App.css';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    unitType: '',
    paymentPlan: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isRTL = i18n.language === 'ar';

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleOptionSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const validateStep = () => {
    if (currentStep === 1 && !formData.unitType) {
      setError(t('selectOption'));
      return false;
    }
    if (currentStep === 2 && !formData.paymentPlan) {
      setError(t('selectOption'));
      return false;
    }
    if (currentStep === 3) {
      if (!formData.firstName || !formData.lastName || !formData.phoneNumber) {
        setError(t('fillAllFields'));
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
      setError('');
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setError('');
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        language: i18n.language,
        createdAt: serverTimestamp(),
        submittedAt: new Date().toISOString()
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      unitType: '',
      paymentPlan: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    });
    setCurrentStep(1);
    setIsSubmitted(false);
    setError('');
  };

  if (isSubmitted) {
    return (
      <div className={`App ${isRTL ? 'rtl' : ''}`}>
        <div className="container">
          <header className="header">
            <div className="logo-container">
              <img src="/logo.png" alt="The Address" className="logo" />
            </div>
            <div className="language-toggle">
              <button
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => toggleLanguage('en')}
              >
                EN
              </button>
              <button
                className={`lang-btn ${i18n.language === 'ar' ? 'active' : ''}`}
                onClick={() => toggleLanguage('ar')}
              >
                AR
              </button>
            </div>
          </header>
          <main className="main-content">
            <div className="form-container">
              <div className="success-container">
                <div className="success-icon">✓</div>
                <h1 className="success-title">{t('thankYou')}</h1>
                <p className="success-message">{t('successMessage')}</p>
                <button className="btn btn-primary" onClick={handleReset} style={{ marginTop: '30px' }}>
                  {t('submitAnother')}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className={`App ${isRTL ? 'rtl' : ''}`}>
      <div className="container">
        <header className="header">
          <div className="logo-container">
            <img src="/logo.png" alt="The Address" className="logo" />
          </div>
          <div className="language-toggle">
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => toggleLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${i18n.language === 'ar' ? 'active' : ''}`}
              onClick={() => toggleLanguage('ar')}
            >
              AR
            </button>
          </div>
        </header>

        <main className="main-content">
          <div className="form-container">
            <div className="step-indicator">
              <h2 className="step-title">
                {currentStep === 1 && t('unitType')}
                {currentStep === 2 && t('paymentPlan')}
                {currentStep === 3 && t('contactInfo')}
              </h2>
              <div className="step-counter">
                {t('step')} {currentStep} / 3
              </div>
            </div>

            {error && (
              <div className="error-message">
                <span>⚠</span>
                <span>{error}</span>
              </div>
            )}

            {/* Step 1: Unit Type */}
            {currentStep === 1 && (
              <div className="options-container">
                <button
                  className={`option-button ${formData.unitType === 'villa' ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect('unitType', 'villa')}
                >
                  {t('villa')}
                </button>
                <button
                  className={`option-button ${formData.unitType === 'apartment' ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect('unitType', 'apartment')}
                >
                  {t('apartment')}
                </button>
              </div>
            )}

            {/* Step 2: Payment Plan */}
            {currentStep === 2 && (
              <div className="options-container">
                <button
                  className={`option-button ${formData.paymentPlan === 'lessThan100' ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect('paymentPlan', 'lessThan100')}
                >
                  {t('lessThan100')}
                </button>
                <button
                  className={`option-button ${formData.paymentPlan === 'range100to200' ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect('paymentPlan', 'range100to200')}
                >
                  {t('range100to200')}
                </button>
                <button
                  className={`option-button ${formData.paymentPlan === 'range200to300' ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect('paymentPlan', 'range200to300')}
                >
                  {t('range200to300')}
                </button>
                <button
                  className={`option-button ${formData.paymentPlan === 'above300' ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect('paymentPlan', 'above300')}
                >
                  {t('above300')}
                </button>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div>
                <div className="form-group">
                  <label className="form-label">{t('firstName')} *</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={t('firstName')}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('lastName')} *</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={t('lastName')}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('phoneNumber')} *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="form-input"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+20 xxx xxx xxxx"
                  />
                </div>
              </div>
            )}

            <div className="button-group">
              {currentStep > 1 && (
                <button className="btn btn-secondary" onClick={handleBack}>
                  {t('back')}
                </button>
              )}
              {currentStep < 3 ? (
                <button className="btn btn-primary" onClick={handleNext}>
                  {t('next')}
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '...' : t('submit')}
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
