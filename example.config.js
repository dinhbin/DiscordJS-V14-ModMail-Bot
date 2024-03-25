module.exports = {
    client: {
        token: 'MTIyMTgzODk2ODU3Mjc0Mzg0MA.G1ixvl.WC4YDxUpqMAz7X7Cn4SbNhnv2P0_h_PXjWCjMA', // ← Your bot token (.env IS RECOMMENDED)
        id: '1221838968572743840' // ← Your bot ID
    },
    modmail: {
        guildId: '1220313226240196658', // ← Your server ID
        categoryId: '1221722482726146078', // ← The modmail category ID
        staffRoles: ['1220314781878190110'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: '' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
