'use client';

import { useState, useEffect } from 'react';
import { Check, Hexagon } from '@/lib/icons';

interface QualificationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    fullName: string;
    email: string;
    companyName: string;
    industry: string;
    companyStage: string;
    teamSize: string;
    fundingAmount: string;
    previousFunding: string;
    previousAmount: string;
    pitchDeck: string;
    timeline: string;
    hearAbout: string;
    notes: string;
}

interface FormInputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
}

interface FormSelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    error?: string;
    required?: boolean;
}

interface FormRadioProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    error?: string;
    required?: boolean;
}

const FormInput = ({
    label,
    type = 'text',
    value,
    onChange,
    error,
    placeholder,
    required = false,
}: FormInputProps) => (
    <div className="mb-6">
        <label className="block font-mono text-xs text-[#d9ff00] mb-2 uppercase tracking-wider">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 font-mono text-sm focus:border-[#d9ff00] focus:outline-none transition-colors"
        />
        {error && <p className="text-red-500 text-xs mt-1 font-mono">{error}</p>}
    </div>
);

const FormSelect = ({ label, value, onChange, options, error, required = false }: FormSelectProps) => (
    <div className="mb-6">
        <label className="block font-mono text-xs text-[#d9ff00] mb-2 uppercase tracking-wider">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 font-mono text-sm focus:border-[#d9ff00] focus:outline-none transition-colors cursor-pointer"
        >
            <option value="">Select...</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
        {error && <p className="text-red-500 text-xs mt-1 font-mono">{error}</p>}
    </div>
);

const FormRadio = ({ label, value, onChange, options, error, required = false }: FormRadioProps) => (
    <div className="mb-6">
        <label className="block font-mono text-xs text-[#d9ff00] mb-3 uppercase tracking-wider">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="space-y-2">
            {options.map((opt) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input
                        type="radio"
                        value={opt}
                        checked={value === opt}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-4 h-4 accent-[#d9ff00]"
                    />
                    <span className="text-white font-mono text-sm group-hover:text-[#d9ff00] transition-colors">
                        {opt}
                    </span>
                </label>
            ))}
        </div>
        {error && <p className="text-red-500 text-xs mt-1 font-mono">{error}</p>}
    </div>
);

export default function QualificationModal({ isOpen, onClose }: QualificationModalProps) {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        companyName: '',
        industry: '',
        companyStage: '',
        teamSize: '',
        fundingAmount: '',
        previousFunding: '',
        previousAmount: '',
        pitchDeck: '',
        timeline: '',
        hearAbout: '',
        notes: '',
    });

    const updateField = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const validateStep = (stepNum: number) => {
        const newErrors: Record<string, string> = {};

        if (stepNum === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
            if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        }

        if (stepNum === 2) {
            if (!formData.industry) newErrors.industry = 'Industry is required';
            if (!formData.companyStage) newErrors.companyStage = 'Company stage is required';
            if (!formData.teamSize) newErrors.teamSize = 'Team size is required';
        }

        if (stepNum === 3) {
            if (!formData.fundingAmount) newErrors.fundingAmount = 'Funding amount is required';
            if (!formData.previousFunding) newErrors.previousFunding = 'This field is required';
            if (formData.previousFunding === 'Yes' && !formData.previousAmount.trim()) {
                newErrors.previousAmount = 'Please specify amount';
            }
            if (!formData.pitchDeck) newErrors.pitchDeck = 'This field is required';
        }

        if (stepNum === 4) {
            if (!formData.timeline) newErrors.timeline = 'Timeline is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
        setErrors({});
    };

    const handleSubmit = async () => {
        if (!validateStep(4)) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Log form data to console (replace with actual API call later)
        console.log('=== VIVEREACH LEAD SUBMISSION ===');
        console.log(formData);
        console.log('================================');

        setIsSubmitting(false);
        setIsSuccess(true);

        // Close modal after success
        setTimeout(() => {
            onClose();
            setIsSuccess(false);
            setStep(1);
            setFormData({
                fullName: '',
                email: '',
                companyName: '',
                industry: '',
                companyStage: '',
                teamSize: '',
                fundingAmount: '',
                previousFunding: '',
                previousAmount: '',
                pitchDeck: '',
                timeline: '',
                hearAbout: '',
                notes: '',
            });
        }, 2000);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-black border-2 border-[#d9ff00] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(217,255,0,0.3)] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                {/* Header */}
                <div className="sticky top-0 bg-black border-b border-[#333] px-6 py-4 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-2xl font-black text-[#d9ff00] font-mono uppercase tracking-tight">
                            ACCESS_REQUEST
                        </h2>
                        <p className="text-xs text-gray-500 font-mono mt-1">STEP {step}/4</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-[#d9ff00] transition-colors text-2xl font-bold w-10 h-10 flex items-center justify-center"
                    >
                        ×
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-[#111]">
                    <div
                        className="h-full bg-[#d9ff00] transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                    />
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8">
                    {isSuccess ? (
                        <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
                            <div className="w-16 h-16 bg-[#d9ff00] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-10 h-10 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#d9ff00] mb-2">SUCCESS</h3>
                            <p className="text-gray-400 font-mono text-sm">We&apos;ll be in touch within 24 hours.</p>
                        </div>
                    ) : (
                        <>
                            {/* Step 1: Contact Info */}
                            {step === 1 && (
                                <div className="animate-[slideIn_0.3s_ease-out]">
                                    <h3 className="text-xl font-bold text-white mb-6 font-mono">CONTACT INFORMATION</h3>
                                    <FormInput
                                        label="Full Name"
                                        value={formData.fullName}
                                        onChange={(val) => updateField('fullName', val)}
                                        error={errors.fullName}
                                        placeholder="John Doe"
                                        required
                                    />
                                    <FormInput
                                        label="Email Address"
                                        type="email"
                                        value={formData.email}
                                        onChange={(val) => updateField('email', val)}
                                        error={errors.email}
                                        placeholder="john@company.com"
                                        required
                                    />
                                    <FormInput
                                        label="Company Name"
                                        value={formData.companyName}
                                        onChange={(val) => updateField('companyName', val)}
                                        error={errors.companyName}
                                        placeholder="Acme Inc."
                                        required
                                    />
                                </div>
                            )}

                            {/* Step 2: Company Details */}
                            {step === 2 && (
                                <div className="animate-[slideIn_0.3s_ease-out]">
                                    <h3 className="text-xl font-bold text-white mb-6 font-mono">COMPANY DETAILS</h3>
                                    <FormSelect
                                        label="Industry / Sector"
                                        value={formData.industry}
                                        onChange={(val) => updateField('industry', val)}
                                        options={[
                                            'SaaS',
                                            'Fintech',
                                            'Healthcare',
                                            'E-commerce',
                                            'AI/ML',
                                            'Logistics',
                                            'Cybersecurity',
                                            'Other',
                                        ]}
                                        error={errors.industry}
                                        required
                                    />
                                    <FormSelect
                                        label="Company Stage"
                                        value={formData.companyStage}
                                        onChange={(val) => updateField('companyStage', val)}
                                        options={['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C+']}
                                        error={errors.companyStage}
                                        required
                                    />
                                    <FormSelect
                                        label="Team Size"
                                        value={formData.teamSize}
                                        onChange={(val) => updateField('teamSize', val)}
                                        options={['1-5', '6-20', '21-50', '51-100', '100+']}
                                        error={errors.teamSize}
                                        required
                                    />
                                </div>
                            )}

                            {/* Step 3: Funding Details */}
                            {step === 3 && (
                                <div className="animate-[slideIn_0.3s_ease-out]">
                                    <h3 className="text-xl font-bold text-white mb-6 font-mono">FUNDING DETAILS</h3>
                                    <FormSelect
                                        label="Amount Seeking"
                                        value={formData.fundingAmount}
                                        onChange={(val) => updateField('fundingAmount', val)}
                                        options={['< $500K', '$500K - $2M', '$2M - $5M', '$5M - $10M', '$10M+']}
                                        error={errors.fundingAmount}
                                        required
                                    />
                                    <FormRadio
                                        label="Previous Funding Raised?"
                                        value={formData.previousFunding}
                                        onChange={(val) => updateField('previousFunding', val)}
                                        options={['Yes', 'No']}
                                        error={errors.previousFunding}
                                        required
                                    />
                                    {formData.previousFunding === 'Yes' && (
                                        <FormInput
                                            label="Previous Funding Amount"
                                            value={formData.previousAmount}
                                            onChange={(val) => updateField('previousAmount', val)}
                                            error={errors.previousAmount}
                                            placeholder="e.g., $1.5M"
                                            required
                                        />
                                    )}
                                    <FormRadio
                                        label="Pitch Deck Ready?"
                                        value={formData.pitchDeck}
                                        onChange={(val) => updateField('pitchDeck', val)}
                                        options={['Yes', 'No', 'In Progress']}
                                        error={errors.pitchDeck}
                                        required
                                    />
                                </div>
                            )}

                            {/* Step 4: Timeline */}
                            {step === 4 && (
                                <div className="animate-[slideIn_0.3s_ease-out]">
                                    <h3 className="text-xl font-bold text-white mb-6 font-mono">TIMELINE & DETAILS</h3>
                                    <FormSelect
                                        label="When do you need funding?"
                                        value={formData.timeline}
                                        onChange={(val) => updateField('timeline', val)}
                                        options={['ASAP (< 1 month)', '1-3 months', '3-6 months', '6+ months']}
                                        error={errors.timeline}
                                        required
                                    />
                                    <FormInput
                                        label="How did you hear about us?"
                                        value={formData.hearAbout}
                                        onChange={(val) => updateField('hearAbout', val)}
                                        placeholder="LinkedIn, referral, etc."
                                    />
                                    <div className="mb-6">
                                        <label className="block font-mono text-xs text-[#d9ff00] mb-2 uppercase tracking-wider">
                                            Additional Notes
                                        </label>
                                        <textarea
                                            value={formData.notes}
                                            onChange={(e) => updateField('notes', e.target.value)}
                                            placeholder="Anything else we should know?"
                                            rows={4}
                                            className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 font-mono text-sm focus:border-[#d9ff00] focus:outline-none transition-colors resize-none"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex gap-4 mt-8">
                                {step > 1 && (
                                    <button
                                        onClick={handleBack}
                                        className="flex-1 bg-[#111] border border-[#333] text-white py-3 px-6 font-mono uppercase text-sm hover:border-[#d9ff00] hover:text-[#d9ff00] transition-colors"
                                    >
                                        ← Back
                                    </button>
                                )}
                                {step < 4 ? (
                                    <button
                                        onClick={handleNext}
                                        className="flex-1 bg-[#d9ff00] text-black py-3 px-6 font-mono uppercase text-sm font-bold hover:bg-white transition-colors"
                                    >
                                        Next →
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="flex-1 bg-[#d9ff00] text-black py-3 px-6 font-mono uppercase text-sm font-bold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Hexagon className="w-4 h-4 animate-spin" />
                                                SUBMITTING...
                                            </>
                                        ) : (
                                            'SUBMIT REQUEST'
                                        )}
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
