import * as Yup from 'yup';

export const SignupValidationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters'),
    email: Yup.string()
        .required('Email is required')
        .min(6, 'Email must be at least 6 characters')
        .max(100, 'Email cannot exceed 100 characters')
        .email('Invalid Email Format'),
    company: Yup.string()
        .required('Company is required')
        .min(4, 'Company name must be at least 4 characters')
        .max(100, 'Company name cannot exceed 100 characters'),
    title: Yup.string()
        .required('Title is required')
        .min(2, 'Title must be at least 2 characters')
        .max(50, 'Title cannot exceed 50 characters'),
});
