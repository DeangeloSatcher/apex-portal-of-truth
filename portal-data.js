window.PORTAL_DATA = {

  meta: {
    agency_name: "Apex Pipeline Systems",
    owner: "Deangelo Satcher",
    last_updated: "2026-04-13",
  },

  dashboard: {
    mrr: 0,
    active_clients: 1,
    conversations_booked_this_month: 0,
    top_priorities: [
      "Deliver 20 booked conversations for Aaron by May 28 — 45-day clock is running",
      "Dial in the delivery process so the next client onboarding is clockwork",
      "Stay high-leverage — only work on things that move the needle",
      "Keep outreach running — land Client #2 and #3 while delivering",
    ],
    recent_activity: [
      {
        date: "2026-04-13",
        type: "milestone",
        text: "45-day delivery clock started for Aaron",
      },
    ],
  },

  clients: [
    {
      id: "aaron",
      name: "Aaron",
      company: "",
      status: "active",
      pipeline_stage: "delivering",
      started: "2026-04-13",
      deadline: "2026-05-28",
      goal_conversations: 20,
      conversations_booked: 0,
      client_portal_url: "",
      overview: {
        next_steps: [
          "Complete onboarding and collect ICP details",
          "Finalize podcast name and format",
          "Begin outreach to first batch of podcast guests",
        ],
        notes: "First client. Use this engagement to lock in the delivery process so the next client onboarding is clockwork. Mentor providing weekly calls and templates.",
      },
      calls: [],
      podcasts: [],
      discovery_calls: [],
      sales_call: {
        status: "closed_won",
        scheduled_date: null,
        outcome: "closed_won",
        outcome_notes: "Closed at $900 one-time setup fee",
        deal_value: 900,
        analysis: null,
      },
    },
  ],

  pipeline_stages: [
    { id: "prospecting",         label: "Prospecting",          order: 1 },
    { id: "podcast_booked",      label: "Podcast Booked",       order: 2 },
    { id: "podcast_done",        label: "Podcast Done",         order: 3 },
    { id: "discovery_scheduled", label: "Discovery Scheduled",  order: 4 },
    { id: "discovery_done",      label: "Discovery Done",       order: 5 },
    { id: "sales_scheduled",     label: "Sales Scheduled",      order: 6 },
    { id: "closed",              label: "Closed",               order: 7 },
    { id: "delivering",          label: "Delivering",           order: 8 },
  ],

};
