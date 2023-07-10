import RootLayout from "./root-layout.tsx"
import DashboardPage from "./(driver)/(protected)/dashboard/_page.tsx"
import IntroductionPage from "./(driver)/introduction/_page.tsx"
import DriverLayout from "./(driver)/_layout.tsx"
import ProtectedDriverLayout from "./(driver)/(protected)/_layout.tsx"
import SystemLayout from "./system/_layout.tsx"
import ProtectedSystemLayout from "./system/(protected)/_layout.tsx"
import AdminPage from "./system/(protected)/admin/_page.tsx"
import TeamMemberPage from "./system/(protected)/team-member/_page.tsx"

export {
   RootLayout,

   IntroductionPage,
   DriverLayout,
   ProtectedDriverLayout,
   DashboardPage,

   SystemLayout,
   ProtectedSystemLayout,

   AdminPage,

   TeamMemberPage
}