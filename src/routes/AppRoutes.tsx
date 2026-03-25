import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import SolutionDetailPage from "../pages/solutions/SolutionDetailPage";
import ForMedrixLimsPage from "../pages/solutions/detailPages/ForMedrixLimsPage";
import PredictiveAnalyticsPage from "../pages/solutions/detailPages/PredictiveAnalyticsPage";
import RealTimeDiagnosticsPage from "../pages/solutions/detailPages/RealTimeDiagnosticsPage";
import DiseaseSurveillancePage from "../pages/solutions/detailPages/DiseaseSurveillancePage";
import QualityIntelligencePage from "../pages/solutions/detailPages/QualityIntelligencePage";
import DataIntegrationHubPage from "../pages/solutions/detailPages/DataIntegrationHubPage";
import ComplianceAutomationPage from "../pages/solutions/detailPages/ComplianceAutomationPage";
import ClinicalDecisionSupportPage from "../pages/solutions/detailPages/ClinicalDecisionSupportPage";
import PatientPortalPage from "../pages/solutions/detailPages/PatientPortalPage";
import TelemedicineIntegrationPage from "../pages/solutions/detailPages/TelemedicineIntegrationPage";
import ApiSuitePage from "../pages/solutions/detailPages/ApiSuitePage";
import MobileDiagnosticsAppPage from "../pages/solutions/detailPages/MobileDiagnosticsAppPage";
import IndustriesPage from "../pages/industries/IndustriesPage";
import TechnologyPage from "../pages/technology/TechnologyPage";
import NewsEventsPage from "../pages/news/NewsEventsPage";
import CareersPage from "../pages/careers/CareersPage";
import NotFoundPage from "../pages/NotFoundPage";
import { appPaths } from "./routeConfig";

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={appPaths.home} element={<HomePage />} />
        <Route path="/solutions/formedrix-lims" element={<ForMedrixLimsPage />} />
        <Route path="/solutions/predictive-analytics" element={<PredictiveAnalyticsPage />} />
        <Route path="/solutions/real-time-diagnostics" element={<RealTimeDiagnosticsPage />} />
        <Route path="/solutions/disease-surveillance" element={<DiseaseSurveillancePage />} />
        <Route path="/solutions/quality-intelligence" element={<QualityIntelligencePage />} />
        <Route path="/solutions/data-integration-hub" element={<DataIntegrationHubPage />} />
        <Route path="/solutions/compliance-automation" element={<ComplianceAutomationPage />} />
        <Route path="/solutions/clinical-decision-support" element={<ClinicalDecisionSupportPage />} />
        <Route path="/solutions/patient-portal" element={<PatientPortalPage />} />
        <Route path="/solutions/telemedicine-integration" element={<TelemedicineIntegrationPage />} />
        <Route path="/solutions/api-suite" element={<ApiSuitePage />} />
        <Route path="/solutions/mobile-diagnostics-app" element={<MobileDiagnosticsAppPage />} />
        <Route path={appPaths.solutionDetail} element={<SolutionDetailPage />} />
        <Route path={appPaths.industries} element={<IndustriesPage />} />
        <Route path={appPaths.technology} element={<TechnologyPage />} />
        <Route path={appPaths.newsEvents} element={<NewsEventsPage />} />
        <Route path={appPaths.about} element={<AboutPage />} />
        <Route path={appPaths.careers} element={<CareersPage />} />
        <Route path={appPaths.contact} element={<ContactPage />} />
        <Route path={appPaths.notFound} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
