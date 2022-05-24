const SUPABASE_URL = 'https://lrkvacapghknfzyfbduq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxya3ZhY2FwZ2hrbmZ6eWZiZHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMzNzksImV4cCI6MTk2Nzg3OTM3OX0.R4JDMarLJDInohMRIVMNLERvl6nc2GLUQI8t5Dt8mFw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function getWorkShops() {
    const response = await client.from('circus_classes').select('*, participants(*)');
    return response.data;
}
