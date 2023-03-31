import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api";

export function VerifyUserEmail() {
  let { userId } = useParams();
  let { uniqueString } = useParams();

  const [verificationStatus, setVerificationStatus] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState(
    "Please wait while we check your credentials..."
  );

  async function verifyUniqueString(userId, uniqueString) {
    try {
      const response = await api.get(
        `http://localhost:4000/user/email-verification/${userId}/${uniqueString}`,
        {
          userId: userId,
          uniqueString: uniqueString,
        }
      );

      setVerificationMessage(response.data.msg);
      // console.dir(response.data)
      if (response.statusText === "OK") {
        setVerificationStatus(true);
      }
    } catch (err) {
      // Should we consider canceling the user and ask to sign up again?
      setVerificationStatus(false);
      setVerificationMessage(`Something went wrong.. ( Status Code ${err.response.status} ) Try to log in.`);
    }
  }

  useEffect(() => {
    verifyUniqueString(userId, uniqueString);
  }, []);

  return (
    <>
      {verificationStatus ? (
        <h1 className="ml-14 mt-12 text-lg text-indigo-500" >
          {verificationMessage} You can now <Link to="/login">log in</Link>
        </h1>
      ) : (
        <div>
          <h1 className="ml-14 mt-12 text-lg text-indigo-500" >{verificationStatus}</h1>
          <h1 className="ml-14 mt-12 text-lg text-indigo-500" >{verificationMessage}</h1>
        </div>
      )}
    </>
  );
}
