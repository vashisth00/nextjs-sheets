import { google } from 'googleapis';

export async function getServerSideProps({ query }) {

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });
}