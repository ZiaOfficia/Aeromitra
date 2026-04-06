import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

import { SEO } from "../components/common/SEO";

export const TermsOfServicePage = () => {
  return (
    <div className="bg-white min-h-screen pt-[60px] md:pt-[50px]">
      <SEO
        title="Terms of Service"
        description="Terms of Service for Aeromitra Aviation Academy."
      />
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 shadow-sm border border-stone-100">
        <h1 className="text-4xl font-serif text-stone-900 mb-8">
          Terms of Service
        </h1>
        <p className="text-stone-500 mb-8 text-sm uppercase tracking-widest">
          Effective Date: October 2024
        </p>

        <div className=”prose prose-stone max-w-none text-stone-600”>
          <p className=”mb-6”>
            Welcome to Aeromitra Aviation Academy! These Terms of Service (“Terms”) govern your
            access to and use of our aviation training services, as well as the
            website aeromitraa.com. By using our services or visiting our
            website, you agree to these Terms. Please read them carefully. If
            you do not agree with any part of these Terms, please refrain from
            using our services or website.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Acceptance of Terms
          </h2>
          <p className=”mb-6”>
            By accessing or using aeromitraa.com or enrolling in our aviation
            training programs, you agree to these Terms, along with our
            Privacy Policy. These Terms apply to all users, students, and
            visitors who access or use our website and services.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Services Overview
          </h2>
          <p className=”mb-6”>
            Aeromitra Aviation Academy specializes in professional aviation training. Our offerings
            include, but are not limited to, Commercial Pilot License (CPL), Private Pilot License (PPL),
            Student Pilot License (SPL), DGCA Ground Classes, Type Rating, Flight Dispatcher training,
            Cabin Crew Training, and Tuition Financing. Specific details of each program will be outlined
            during your enrollment consultation.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Eligibility
          </h2>
          <p className=”mb-6”>
            Eligibility requirements vary by program. For pilot training programs (CPL, PPL, SPL),
            candidates must meet DGCA medical and educational requirements. For Cabin Crew and Flight
            Dispatcher programs, candidates must be at least 18 years of age. Our admissions team will
            confirm all eligibility criteria during your counseling session.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Enrollment and Payment Terms
          </h2>
          <p className=”mb-4”>
            To secure your enrollment in any Aeromitra training program, the following steps are
            required:
          </p>
          <ul className=”list-disc pl-5 mb-6 space-y-2”>
            <li>
              <strong>Enrollment Confirmation:</strong> A signed enrollment form outlining
              the scope of training and fee structure.
            </li>
            <li>
              <strong>Admission Fee:</strong> A non-refundable admission fee is required
              to confirm your seat. This will be specified at the time of enrollment.
            </li>
            <li>
              <strong>Payment Schedule:</strong> Training fees may be paid in installments
              as agreed during enrollment. Financing options are available through our Tuition
              Financing program.
            </li>
          </ul>
          <p className=”mb-6”>
            Failure to meet payment terms may result in a pause or cancellation of training services.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Cancellations and Refunds
          </h2>
          <ul className=”list-disc pl-5 mb-6 space-y-2”>
            <li>
              <strong>Cancellation by the Student:</strong> If you need to withdraw from a program,
              please refer to the cancellation and refund policy detailed in your enrollment agreement.
              Admission fees are typically non-refundable.
            </li>
            <li>
              <strong>Cancellation by Aeromitra:</strong> In exceptional circumstances, Aeromitra
              reserves the right to cancel or postpone a program batch. In such cases, students will
              be offered rescheduling or a full refund of fees paid.
            </li>
          </ul>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Student Responsibilities
          </h2>
          <p className=”mb-4”>As a student, you agree to:</p>
          <ul className=”list-disc pl-5 mb-6 space-y-2”>
            <li>
              Provide accurate personal and academic information during the admissions process.
            </li>
            <li>
              Maintain valid DGCA medical certification as required for your program.
            </li>
            <li>
              Attend scheduled classes, flight sessions, and examinations as per the program timetable.
            </li>
            <li>
              Communicate promptly with Aeromitra's team regarding any changes to your schedule or circumstances.
            </li>
          </ul>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Intellectual Property
          </h2>
          <p className=”mb-6”>
            All content and materials provided by Aeromitra Aviation Academy, including study materials,
            website content, logos, and images, are the intellectual property of Aeromitra or our licensors.
            You may not reproduce, distribute, or create derivative works based on our content without
            written consent.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Limitation of Liability
          </h2>
          <p className=”mb-6”>
            To the fullest extent permitted by law, Aeromitra will not be liable for any indirect,
            incidental, or consequential damages arising from the use of our services or website,
            including delays due to weather, DGCA scheduling, or other circumstances beyond our control.
            We will work diligently to minimize disruptions and offer alternative arrangements wherever possible.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Force Majeure
          </h2>
          <p className=”mb-6”>
            Aeromitra will not be responsible for delays or interruptions to training due to events
            beyond our control, including natural disasters, regulatory changes, airspace restrictions,
            pandemics, or other force majeure events. We will work with affected students to reschedule
            training at the earliest opportunity.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Dispute Resolution
          </h2>
          <p className=”mb-6”>
            In the event of a dispute, we encourage you to contact us directly to seek a resolution.
            Unresolved disputes will be governed by the laws of India, and any legal action will be
            subject to the jurisdiction of the courts of Lucknow, Uttar Pradesh.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Changes to Terms
          </h2>
          <p className=”mb-6”>
            We reserve the right to update or modify these Terms at any time. Any changes will be
            effective immediately upon posting to our website. Continued use of our services after
            any modifications constitutes acceptance of the updated Terms.
          </p>

          <h2 className=”text-2xl font-serif text-stone-900 mt-8 mb-4”>
            Contact Us
          </h2>
          <p className=”mb-4”>
            If you have any questions or concerns about these Terms of Service, please contact us:
          </p>
          <div className=”bg-stone-50 p-6 rounded-lg border border-stone-200”>
            <h3 className=”font-serif text-lg text-stone-900 mb-2”>
              Aeromitra Aviation Academy
            </h3>
            <p className=”mb-1”>
              <strong>Email:</strong> info@aeromitraa.com
            </p>
            <p className=”mb-1”>
              <strong>Phone:</strong> +91 9005527666 / +91 9076524305
            </p>
            <p>
              <strong>Address:</strong> 34 A, 2nd Floor, Ramanand Trade Centre, Above Woodland Showroom, Kapurthala, Aliganj, Lucknow 226024
            </p>
          </div>
          <p className=”mt-6 italic”>
            Thank you for choosing Aeromitra Aviation Academy. We look forward to guiding you toward a successful aviation career.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-100 flex justify-center">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
