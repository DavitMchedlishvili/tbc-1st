import { getSession } from "@auth0/nextjs-auth0";

const ProfileClient = async (): Promise<JSX.Element> => {
  const session = await getSession();


  if (!session?.user) {
    return (
      <div className="container mx-auto 2xl:px-20">
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="container mx-auto 2xl:px-20">
      <div className="profile">
        <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfileClient;
