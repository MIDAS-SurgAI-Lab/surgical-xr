# Surgical XR

**Surgical video and data, in one view.**

Surgical XR is a research project by **MIDAS Lab** exploring how head-mounted displays (HMDs), including **Samsung Galaxy XR** and **Apple Vision Pro**, can support the surgical workflow.

Our goal is an XR workspace that brings surgical video, patient information and **AI-assisted guidance** together. These pages follow the work toward that goal: our prototypes, operating-room tests and what we learn along the way.

[Explore Surgical XR](https://midas-surgai-lab.github.io/surgical-xr/) · [History](https://midas-surgai-lab.github.io/surgical-xr/en/history.html) · [Roadmap](https://midas-surgai-lab.github.io/surgical-xr/en/roadmap.html)

## Where we are heading

The current prototype brings together endoscopic video, CT/MRI, 3D anatomy models and vital signs. Live endoscopic streaming and vital-sign display have been tested in the operating room.

```mermaid
flowchart TB
    accTitle: Surgical XR research direction
    accDescr: The current XR prototype leads to two research directions, dedicated streaming hardware and AI assistance using video and voice, toward an XR workspace for surgical assistance.
    current["NOW<br/>Real-time Surgical View"]
    appliance["NEXT<br/>XR Streaming Appliance<br/>Simpler setup and operation"]
    guidance["EXPLORING<br/>Multimodal Surgical Guidance<br/>Video- and voice-based AI"]
    goal["LONG-TERM GOAL<br/>An XR workspace for<br/>surgical assistance"]

    current -.-> appliance
    current -.-> guidance
    appliance -.-> goal
    guidance -.-> goal

    classDef current fill:#e5eff7,stroke:#356a8a,color:#19384c
    classDef future fill:#f4f7fa,stroke:#a7bdcd,color:#314e62
    classDef goal fill:#19384c,stroke:#19384c,color:#ffffff
    class current current
    class appliance,guidance future
    class goal goal
```

The next hardware step is a dedicated device for capture, encoding and streaming. In parallel, we are exploring how AI could use surgical video and voice to support a specific task. Intended use and evaluation will be considered as each direction takes shape.

---

[MIDAS Lab](https://github.com/MIDAS-SurgAI-Lab)
