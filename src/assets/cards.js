// https://docs.google.com/spreadsheets/d/12iZfDkc-DtVNXV5ZoOiKKZuNGcsb3yQ0V3DNBQIalSo/edit#gid=1677585875
// Parsed out of cti-legal.csv
const ctiCards = [
    {
        "id": "7307164c-2fc3-4c0d-8bd7-85f6db78ee05",
        "date": "10/19/2020",
        "description": "Six GRU Officers Charged with Hacking",
        "notes": "Six officers of the Russian military intelligence directorate were formally charged for NotPetya, Olympic Destroyer.",
        "contributor": "",
        "govRelease": "https://www.justice.gov/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and",
        "fullDoc": "https://www.justice.gov/opa/press-release/file/1328521/download",
        "other": "https://www.fbi.gov/wanted/cyber/gru-hackers-destructive-malware-and-international-cyber-attacks"
    },
    {
        "id": "dd438d1e-88d7-449a-81e6-f17aae2ab67e",
        "date": "10/14/2020",
        "description": "FinFisher Labs Indicted for FinSpy Campaign",
        "notes": "German courts have formally accused FinFisher labs of exporting FinSpy to Turkey in violation of export controls.",
        "contributor": "",
        "govRelease": "https://freiheitsrechte.org/home/wp-content/uploads/2019/11/2019-07-04-FinFisher-Strafanzeige-EN.pdf",
        "fullDoc": "https://netzpolitik.org/2020/our-criminal-complaint-german-state-malware-company-finfisher-raided/",
        "other": " https://netzpolitik.org/2020/unsere-strafanzeige-razzia-bei-staatstrojaner-firma-finfisher-in-muenchen/ (German)"
    },
    {
        "id": "b59bb111-7c70-4f88-8df6-3fcd09261eb7",
        "date": "10/12/2020",
        "description": "Microsoft et al Trickbot",
        "notes": "",
        "contributor": "",
        "govRelease": "https://noticeofpleadings.com/trickbot/",
        "fullDoc": "https://noticeofpleadings.com/trickbot/",
        "other": ""
    },
    {
        "id": "109b0eab-d7af-4b36-9a74-373bf22ae0ee",
        "date": "10/7/2020",
        "description": "US Dept. Of Justice Seizes domains from Iran Revolutionary Guard Corps (IRGC)",
        "notes": "The US government has seized 92 domain names as part of an ongoing effort to stop the IRGC's global disinformation campaigns.",
        "contributor": "",
        "govRelease": "https://www.justice.gov/opa/pr/united-states-seizes-domain-names-used-iran-s-islamic-revolutionary-guard-corps",
        "fullDoc": "",
        "other": ""
    },
    {
        "id": "f6261087-8486-4f95-b991-3f37a1408b26",
        "date": "9/16/2020",
        "description": "APT41/Barium/Winnti/etc",
        "notes": "Three related indictments",
        "contributor": "",
        "govRelease": "https://www.justice.gov/opa/pr/seven-international-cyber-defendants-including-apt41-actors-charged-connection-computer",
        "fullDoc": "https://www.justice.gov/opa/press-release/file/1317206/download",
        "other": "https://www.fbi.gov/wanted/cyber/behzad-mohammadzadeh"
    },
    {
        "id": "b3f10a90-4319-4b8e-9982-c96557c30e87",
        "date": "9/15/2020",
        "description": "Two Hackers Indicted for Web Defacement",
        "notes": "One Iranian and one Palestenian hackers were indicted for defacing websites in the aftermath of the US military action that killed IRGC leader.",
        "contributor": "",
        "govRelease": "https://www.justice.gov/opa/pr/two-alleged-hackers-charged-defacing-websites-following-killing-qasem-soleimani",
        "fullDoc": "https://www.documentcloud.org/documents/7208905-Behzad-Mohammadzadeh-Indictment.html",
        "other": ""
    },
    {
        "id": "438736ca-545c-4bd7-b546-497178a9a80d",
        "date": "7/21/2020",
        "description": "Chinese Hackers Charged with COVID19-related Attacks",
        "notes": "Two Chinese nationals, believed to be operating under the Ministry of State Security (MSS), were charged for intrustions targeting COVID-19 vaccine research.",
        "contributor": "",
        "govRelease": "https://www.justice.gov/opa/pr/two-chinese-hackers-working-ministry-state-security-charged-global-computer-intrusion",
        "fullDoc": "https://www.justice.gov/opa/press-release/file/1295981/download",
        "other": ""
    },
    {
        "id": "a783374d-b4ee-4e96-aa47-296262625402",
        "date": "2/10/2020",
        "description": "Chinese People's Liberation Army (PLA) Linked to EquiFax hack",
        "notes": "Four Chinese nationals associated with the PLA's 54th Research Institute were charged with computer fraud in relation to the 2017 EquiFax hack.",
        "contributor": "",
        "govRelease": "https://www.justice.gov/opa/pr/chinese-military-personnel-charged-computer-fraud-economic-espionage-and-wire-fraud-hacking",
        "fullDoc": "https://www.justice.gov/opa/press-release/file/1246891/download",
        "other": ""
    }
];

export default ctiCards;