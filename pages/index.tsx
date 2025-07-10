import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Private Team Server",
    desc: "Managers host secure servers. Members join via invite + Google SSO matched to approved emails."
  },
  {
    title: "Upload Anything",
    desc: "Share files, images, PDFs, code, audio, links, and more. Mesh supports your team’s entire knowledge stream."
  },
  {
    title: "AI-Powered Organization",
    desc: "Mesh auto-tags content by topic, timeline, and uploader, generating brief summaries for each asset."
  },
  {
    title: "Knowledge Graph",
    desc: "Your workspace becomes a dynamic map — like multiplayer Obsidian — built from your team’s shared memory."
  },
  {
    title: "Ask Anything",
    desc: "GPT-powered assistant tuned to your content answers questions with precision and references."
  },
  {
    title: "Built for Search",
    desc: "Find anything fast — search by topic, person, date, or keyword. Mesh connects all the dots."
  }
];

const faqs = [
  {
    q: "What is Mesh?",
    a: "Mesh is a private, AI-powered knowledge system that turns your team’s documents, meetings, whiteboards, and threads into a living, searchable intelligence map."
  },
  {
    q: "How does Mesh work?",
    a: "A team manager hosts a private Mesh server. Members join via invite and authenticate using a Google account tied to an admin-approved email. Uploaded content is ingested, summarized, tagged, and connected by AI."
  },
  {
    q: "What types of content can I upload?",
    a: "You can upload PDFs, images, audio files, code, text, notes, links, and meeting recordings. Mesh supports most common formats used by modern teams."
  },
  {
    q: "How does the AI organize the content?",
    a: "Mesh uses LLMs and embeddings to generate summaries and tag content by topic, uploader, team, and timeline. It builds a dynamic knowledge graph linking everything together."
  },
  {
    q: "Is the information searchable?",
    a: "Yes. You can ask Mesh anything, and its GPT-powered assistant will search your team’s knowledge graph to return relevant answers and sources."
  },
  {
    q: "Who can access the knowledge in Mesh?",
    a: "Only team members with approved Google accounts can access your Mesh instance. Access is controlled by your admin."
  },
  {
    q: "Is Mesh secure?",
    a: "Yes. Mesh servers are self-hosted by your team, with strict access control via Google sign-in and admin-approved emails. All data is isolated and encrypted."
  },
  {
    q: "Can I use Mesh with my existing tools?",
    a: "Yes. Mesh supports import and integration with PDFs, code, images, links, meeting recordings, and more."
  },
  {
    q: "Can Mesh replace our wiki or knowledge base?",
    a: "Yes. Mesh not only replaces traditional wikis but enhances them with automatic tagging, graph linking, and GPT-powered search."
  },
  {
    q: "What makes Mesh different from Notion, Obsidian, or Confluence?",
    a: "Mesh is hosted privately by your team, uses AI to organize everything automatically, and visualizes knowledge as a browsable multiplayer graph."
  },
  {
    q: "Can I export or back up my team’s Mesh content?",
    a: "Yes. Admins can export all uploaded files, summaries, and the knowledge graph at any time."
  }
];

export default function MeshLandingPage() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <motion.div 
        className="bg-white min-h px-4 sm:px-10 py-20 text-center"

        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <motion.div className="flex justify-center mb-6" whileHover={{ scale: 1.05 }}>
          <Image
            src="/logo.png"
            alt="Mesh Logo"
            width={96}
            height={96}
            className="rounded-2xl"
          />
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Meet Mesh</h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          Mesh turns your team’s documents, meetings, whiteboards, and threads
          into a living, searchable intelligence system.
        </p>
        <a href="/waitlist" className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Join Waitlist
        </a>
      </motion.div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div 
        className="bg-gray-100 py-24 px-6"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <h4 className="text-xl font-semibold">{item.q}</h4>
                <p className="text-gray-600 mt-1">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="bg-gray-200 py-10 text-center text-sm text-gray-700">
        &copy; {new Date().getFullYear()} Mesh Intelligence, Inc.
      </div>
    </div>
  );
}