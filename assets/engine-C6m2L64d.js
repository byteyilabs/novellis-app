const e=`# The Intelligence Engine

Behind the scenes, Novellis runs a sophisticated set of data processing services that transform your text into a structured narrative database. Understanding these "under the hood" processes helps you trust the AI's suggestions and analysis.

## 1. Lore Reconciliation (Deduplication)

As you write, you might refer to the same character in different ways ("Captain Miller," "Miller," "the captain"). Novellis uses a multi-phase reconciliation engine to ensure your Series Bible remains clean:

- **Semantic Similarity**: Using vector embeddings to realize that "The Dark Lord's Citadel" and "The Fortress of Doom" likely refer to the same entity.
- **Structural Clustering**: An algorithm that groups disparate mentions across chapters into a single **Canonical Entity**.
- **Conflict Resolution**: If the AI finds contradictory descriptions of the same person across different chapters, it flags the most recent one for your review during the merge process.

## 2. Narrative Consistency Checks

Novellis acts as a tireless proofreader for your story's internal logic. It performs two main types of consistency analysis:

- **Fact Consistency**: Validates new information against established profiles. If you suddenly describe a character as having blue eyes when they've always had green, the system will raise an alert.
- **State Consistency**: Tracks the "status" of entities. If a character is marked as being in a specific city in Chapter 5, the system will flag an impossible appearance in another city in Chapter 6 (unless a travel event is established).

## 3. Causal Graph Generation

When you link events to arcs in the **ArcView**, you are building a **Causal Graph**. 
- The system understands that Event B follows Event A not just in text, but in *causality*.
- This allows the **Writing Copilot** to understand the weight of your choices and suggest consequences that respect the history of your world.

## 4. Local High-Performance Indexing

To keep things fast and private, Novellis builds a local index of your project:
- **Vector Search**: High-speed retrieval of relevant lore fragments.
- **Knowledge Graph**: A relational database of your characters and their connections.
- **Draft Versioning**: All changes are tracked locally, allowing the system to compare "Previous Reality" with "Current Narrative."
`;export{e as default};
