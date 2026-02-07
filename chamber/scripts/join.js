
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const timestampInput = document.getElementById("timestamp");

    form.addEventListener("submit", (event) => {
        const now = new Date();

        timestampInput.value = now;

        console.log("Timestamp:", timestampInput.value);
    });


    const membershipLevels = [
        {
            subject: 'Gold Membership',
            number: '01',
            title: 'Gold Membership Benefits',
            cost: '$1500',
            certificate: 'Yes',
            description: 'enhanced marketing, increased networking opportunities, and greater recognition compared to standard memberships. Specific benefits often include exclusive event invitations, higher visibility in the online directory, and direct access to chamber leadership.',
            benefits: ['increased networking opportunities', 'higher visibility', 'Personal Support']
        },
        {
            subject: 'Silver Membership',
            number: '02',
            title: 'Silver Membership Benefits',
            cost: '$1000',
            certificate: 'Yes',
            description: 'offers enhanced benefits beyond basic levels, including elevated visibility through featured directory listings and event sponsorships, exclusive event access like complimentary tickets and VIP exhibit space, and increased marketing opportunities such as social media promotion and member-to-member offers.',
            benefits: ['Networking', 'elevated visibility', 'VIP exhibit space']
        },
        {
            subject: 'Bronze Membership',
            number: '03',
            title: 'Bronze Membership Benefits',
            cost: '$500',
            certificate: 'Yes',
            description: 'provides essential networking, business directory listings, access to member-only events, and basic advocacy, along with some cost savings on certain services',
            benefits: ['Basic Resources', 'Cost savings', 'business directory listings']
        },
        {
            subject: 'Non-profit Membership',
            number: '04',
            title: 'Non-profit Membership Benefits',
            cost: 'Free',
            certificate: 'Yes',
            description: 'basic networking opportunities, increased visibility through online directories, access to events at member pricing, and information on local advocacy efforts',
            benefits: ['Volunteer Support', 'Community Outreach', 'basic networking opportunities']
        }
    ];

    document.querySelectorAll('.learn-more').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const index = link.dataset.courseIndex;
            const card = membershipLevels[index];

            displayCardDetails(card);
        });
    });

    function displayCardDetails(card) {
        const cardDetails = document.getElementById('cardDetails');
        cardDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${card.subject} ${card.number}</h2>
        <h3>${card.title}</h3>
        <p><strong>Cost</strong>: ${card.cost}</p>
        <p><strong>Certificate</strong>: ${card.certificate}</p>
        <p>${card.description}</p>
        <p><strong>Benefits</strong>: ${card.benefits.join(', ')}</p>
        `;
        cardDetails.showModal();

        document.getElementById('closeModal').addEventListener('click', () => {
            cardDetails.close();
        });
    }
});
