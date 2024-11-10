"use client";
import { useState } from "react";
import Head from "next/head";
import useGoogleSignOut from "@/hooks/useGoogleSignOut";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { signOutGoogle } = useGoogleSignOut();

  return (
    <>
      <Head>
        <title>Dashboard | Form Builder</title>
        <meta name="description" content="Admin dashboard to manage forms and view analytics." />
      </Head>

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-indigo-600 text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 ease-in-out z-30 md:relative md:translate-x-0 md:flex flex-col`}
        >
          <div className="p-6 font-bold text-xl">Form Builder</div>
          <nav className="flex flex-col flex-grow space-y-2 px-4">
            {["Overview", "Forms", "Responses", "Analytics", "Settings"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-left px-4 py-2 rounded-lg ${
                  activeSection === section ? "bg-indigo-700" : "hover:bg-indigo-500"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
          <div className="p-4">
            <button
              onClick={signOutGoogle}
              className="w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Overlay for sidebar in mobile view */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content Area */}
        <main className="flex-grow p-6 md:ml-64">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            {/* Toggle Sidebar Button for Mobile */}
            <button
              className="text-gray-600 focus:outline-none md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold text-gray-800">{activeSection}</h1>
          </header>

          {/* Content based on activeSection */}
          <section className="bg-white shadow-md rounded-lg p-6">
            {activeSection === "Overview" && <Overview />}
            {activeSection === "Forms" && <Forms />}
            {activeSection === "Responses" && <Responses />}
            {activeSection === "Analytics" && <Analytics />}
            {activeSection === "Settings" && <Settings />}
          </section>
        </main>
      </div>
    </>
  );
}

// Example content components (replace with actual data)
function Overview() {
  return <div>Overview content goes here. View summary of forms and responses.</div>;
}

function Forms() {
  return <div>Manage your forms here. Create, edit, or delete forms.</div>;
}

function Responses() {
  return <div>Check responses for each form. Download or export data.</div>;
}

function Analytics() {
  return <div>View analytics and data insights based on responses.</div>;
}

function Settings() {
  return <div>Manage account settings, preferences, and notifications.</div>;
}
