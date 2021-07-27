# emtech-process

Documentation on the process the EmTech team follows to test a hypothesis, experiment, and publish.

## Our Projects and Work
### Research Sprints

| Name                                                                     | Description                                                                                                        | Status      | Outputs                                                         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ----------- | --------------------------------------------------------------- |
| [XR for Business](https://github.com/Avanade/emtech-xr/)                 | Reviewing the potential business benefits of XR.                                                                   | Complete    | Point of view on XR, recreated the London Office in AltSpaceVR. |
| [Stretch Labs](https://github.com/Avanade/emtech-stretch-labs)           | Related to our thinking machines work. Experimentation with the Stretch RE3 from Hello Robot, NextMind, and Rocos. | Ongoing     | Published.                                                      |
| [Thinking Machines](https://github.com/Avanade/emtech-thinking-machines) | Reviewing machines that can think and act like people. Framework for creating re-usable machine components.        | In Progress | Ready to publish                                                |
| Distributed Data                                                         | Reviewing the future of distributed data sharing, including ledgers, databases, and other forms of sharing.        | In Planning | -                                                               |



### Other work
| Name                                                                     | Description                                                                                              |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| [University Parnering](https://github.com/Avanade/university-partnering) | The EmTech team lead Avanade's university program. The work EmTech does with academia can be found here. |
| [Voice Font Composer](https://github.com/Avanade/VoiceFontComposer)      | Using a GUI to generate a package for the Microsoft Voice Font composer service.                         |

## Research and Engineering

We work iteratively, using Design Thinking to establish a hypothesis.

This hypothesis either relates to an established [trendline](https://www.avanade.com/en/thinking/research-and-insights/trendlines/emerging-technologies), partner, or technology release.

1. Once a hypothesis has been created, then we identify an experiment to test the hypothesis. The `template-artefacts` folder is used to start a private repository in GitHub.

2. The repository should be added to the [EmTech team](https://github.com/orgs/Avanade/teams/emtech) repositories list.

3. Information in the readme.md and hypothesis.md templates should be completed. These documents are not prescriptive.

4. The experiment and hypothesis should be completed.

5. The repository should follow the [Open Sourcing process](https://avanade.sharepoint.com/sites/GrowthOffice/SitePages/EmTech-Open-Sourcing.aspx) at this point.

   - If the project was client or partner funded, we will need their consent.
   - If the project used technology released under NDA (for example, private prevoews), then we will either need consent from the relevant product owner, or need to embargo the repository until the technology is published publicly.
   - If the project used information released under NDA, then we will either need consent from the party providing information, or will need to see if the project can be re-worked using informaiton that is freely available.

6. Once the open sourcing process is complete, the repository can be made public.

## Trendlines Hierachy

![](./process-assets/relation.svg)

## Standards

All code is provided without warranty, and with documentation/support on a best endeavours basis only, unless otherwise stated.

### Folder structure

Using a prescriptive format based on the information [provided by Kriasoft](https://github.com/KriaSoft/Folder-Structure-Conventions) under the MIT license.

#### Typical layout

    .
    ├── src                     # Source files
    ├── dist                    # Compiled files (where provided)
    ├── docs                    # Documentation files and design artefacts (where needed)
    ├── test                    # Automated tests (where created)
    ├── tools                   # Tools and utilities (where provided)
    ├── LICENSE
    ├── LICENSE-EXCLUSIONS
    ├── full-licence
    ├── hypothesis.md
    └── README.md

## Open Sourcing

Employees can see [the intranet site](https://avanade.sharepoint.com/sites/opensource) for full details on the Avanade Open Source process.

Track open sourcing status in [the GitHub project](https://github.com/orgs/Avanade/projects/1).
