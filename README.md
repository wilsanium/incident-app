# Incident app

An web page containing a tool to record basic information about an incident that has occurred somewhere in the city. The reporter must be able to record at least the following information about the incident:

-   A summary or title
-   Extended details
-   Date & time it happened
-   Precise location where it happened

We’ve been non-specific about the details; we’re interested in how you choose to do it as much as the result. It’s a simple task so don’t spend many hours on it. Write something tiny and perhaps a couple of sentences about your thinking.

## Approach to solution

I always try and take a step back so that I can understand the problems we're trying to fix and who will be impacted by the changes. This allows for questions at the earliest point and as many assumptions as possible removed resulting in less discussion and friction as the work enters a prototyping/development stage. I've listed a few of those questions and assumptions alongside a number of User stories that could then be filtered down to form an MVP or MMF (Minimum Marketable Feature) and then prioritised. The result of which can be taken into a refinement session with the scrum team.

From a coding perspective. I've used a reactive form but it would make sense to turn this into dynamic form so that it is driven purely by data. This would enable the application to work for a number of clients and maintenance be handled through either only database changes and/or a minimal of frontend changes.

## Notes

I explored the dashboard and so that I could understand the best approach into breakdown of functional modules. I also wanted to explore the potential to log when the reporter created a new incident (click 'New incident') and when it was saved (clicking 'submit incident') so that in future the "time to complete incident form" data could be used to measure against existing systems and impact of future changes.

I also chose to not put any testing in so that I could concentrate on more functioning code. On reflection I should have scaled back what I was trying to achieve to illustrate testing ability.

## Questions

-   What types of incidents are we expecting? - e.g. police, health etc
-   What devices need to be covered?
-   Will people assisting with incident be required to access the same application
-   Will there be different levels of access for certain roles?

# Assumptions

-   System used by emergency service worker so must work on mobile devices
-   System covers multiple emergency services
-   Covers a wide range of incident types

## Stakeholders

-   Reporter
-   Caller
-   Manager
-   End user - emergency service user, e.g. police, paramedic etc

# Personas

-   Reporter with steady flow of incidents
-   Reported with high flow of incidents
-   Caller on behalf of someone else
-   Caller of minor incident - no personal injuries
-   Caller of major incident - no personal injuries
-   Caller of incident with injuries
-   Caller with disabilities (e.g. deafness and using typetalk)
-   Manager - CTO
-   Manager - Reporter Management
-   Manager - recruitment
-   End user

## Primary epic/feature

    As a reporter
    	I want to report the details of an incident
    		So that the caller can be assisted

## User story examples

    As a reporter
    	I want to enter a title/summary of an incident
    		So that the incident can be easily recognised

===========================================================

    As a reporter
    	I want to enter additional details of an incident
    		So that the person/people providing assistance can understand the callers needs

===========================================================

    As a reporter
    	I want to record the date and time of the incident
    		So that the person/people providing assistance understands how much time has passed
    		And So that they can provide higher quality assistance

===========================================================

    As a reporter
    	I want to record the precise location of the incident
    		So that the person/people providing assistance can arrive as quickly as possible

AC

-   should handle multiple scenarios - addresses - map location
-   should allow for additional details for more detail of where the incident has occured

===========================================================

    As a reporter
    	I want to save the details of the incident
    		So that a record is kept
    		So that more incidents can be created

===========================================================

    As a reporter
    	I want to update the status of an incident
    		So that the incident can be closed

===========================================================

    As a reporter
    	I want to set the priority of the incident
    		So that the when multiple incidents are created we know which required assistance first

===========================================================

    As a reporter
    	I want to see a list of all active incidents
    		So that i can view the details of an existing incident

===========================================================

    As a reporter
    	I want to see a list of all active incidents
    		So that i can update the currently active incidents

===========================================================

    As a reporter of a major incident
    	I want to link all related incidents
    		So that all reports can be collated quickly for analysis

===========================================================

Additional user stories

    As a manager
    	I want to record the time the incident was created
    		So that I can report on the response times of incidents

## Potential next steps

-   Clean up map component as code needs breaking down into smaller methods. It became quite messy as I added more functionality and worked out the Google Maps Module
-   I wanted to explore the option of driving the date time from buttons. E.g. add a -12 hour, -6 hour, etc list of buttons to quickly adjust time as I feel that this would work better on mobile/touch devices
-   Google maps
    -   Google Places api seems very slow to return results so want to understand the delay. If this is standard behavior then a loading state needs introducing
    -   I wanted to extend the map to include a street view if available. This would automatically update based on the location of the main map
    -   The map marker options should enable the marker to be draggable but this does not seem to be working. It may be a limitation of the Google Maps Module or my implementation
-   Location search
    -   Add buttons to handle different ways to capture the data. e.g.Triangulation would cover users that have an injury and/or disability.
-   Add a log to capture start time, form submittion, edits etc for reporting
-   Create model and form elements to enable dynamic forms
-   Introduce interceptor to handle http errors (e.g. API failures) - display global errors through component - log errors - raise alert so issues can resolves asap
