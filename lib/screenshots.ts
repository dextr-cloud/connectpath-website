// Real product screenshots, taken from the dextr-docs site (assets/images and _pages/*/media)
// and cropped to remove header branding and annotation boxes. Files live in /public/screenshots.
export interface ScreenshotData {
  src: string
  alt: string
  width: number
  height: number
}

export const screenshots = {
  dashboardHome: {
    src: "/screenshots/dashboard-home.jpg",
    alt: "ConnectPath home dashboard with occupancy, agent availability, contacts in queue, and agent performance",
    width: 1585,
    height: 850,
  },
  slaGlance: {
    src: "/screenshots/sla-glance.jpg",
    alt: "At-a-glance widgets showing occupancy, abandoned percentage, service level, and average abandon time",
    width: 1575,
    height: 130,
  },
  liveLook: {
    src: "/screenshots/live-look.jpg",
    alt: "LiveLook listing individual contacts waiting in queue with caller number, channel, queue, and wait time",
    width: 633,
    height: 301,
  },
  teamStatusDrawer: {
    src: "/screenshots/team-status-drawer.jpg",
    alt: "Team Status Drawer with favorites, search, and a menu to call, chat, or change an agent's status",
    width: 854,
    height: 694,
  },
  agentChat: {
    src: "/screenshots/agent-chat.jpg",
    alt: "Direct chat between two agents opened from the Team Status Drawer",
    width: 1823,
    height: 902,
  },
  changeStatus: {
    src: "/screenshots/change-status.jpg",
    alt: "Dialog for a supervisor to change an agent's status remotely",
    width: 997,
    height: 505,
  },
  silentMonitor: {
    src: "/screenshots/silent-monitor.jpg",
    alt: "Team Status Drawer menu with Silent Monitor and Whisper Coach options",
    width: 1067,
    height: 540,
  },
  chatUi: {
    src: "/screenshots/chat-ui.jpg",
    alt: "Agent desktop chat view with the conversation, channel tabs, and customer list",
    width: 1566,
    height: 888,
  },
  callDisposition: {
    src: "/screenshots/call-disposition.jpg",
    alt: "Agent desktop phone panel with the call disposition dialog after a call ends",
    width: 1600,
    height: 806,
  },
  reportCharts: {
    src: "/screenshots/report-charts.jpg",
    alt: "Historical report charts showing queue distribution and agent distribution",
    width: 1710,
    height: 385,
  },
  queueList: {
    src: "/screenshots/queue-list.jpg",
    alt: "Queue management list of queues with skills, total queued, callbacks, and average handle time",
    width: 1431,
    height: 332,
  },
  queueExpanded: {
    src: "/screenshots/queue-expanded.jpg",
    alt: "Expanded queue view with agents, routing profiles, skills, and live queue metrics",
    width: 1430,
    height: 299,
  },
  queueSkills: {
    src: "/screenshots/queue-skills.jpg",
    alt: "Assign Skills dialog with three-star proficiency",
    width: 700,
    height: 250,
  },
  queueSnapshot: {
    src: "/screenshots/queue-snapshot.jpg",
    alt: "Save version dialog for a queue configuration snapshot",
    width: 820,
    height: 197,
  },
  swarmControlGrid: {
    src: "/screenshots/swarmcontrol-grid.png",
    alt: "SwarmControl grid of live AI and human contacts, with channel, status, turn count, and Approval and Intercept flags",
    width: 1024,
    height: 444,
  },
  swarmControlTranscript: {
    src: "/screenshots/swarmcontrol-transcript.png",
    alt: "SwarmControl live transcript of an AI voice contact with Whisper, Nudge, Override, and Intercept controls",
    width: 1024,
    height: 683,
  },
} satisfies Record<string, ScreenshotData>
