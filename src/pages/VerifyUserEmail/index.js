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
        `user/email-verification/${userId}/${uniqueString}`,
        {
          userId: userId,
          uniqueString: uniqueString,
        }
      );

      setVerificationMessage(JSON.stringify(response.data));

      console.log(response.data);
      console.log(JSON.parse(response.data));
      console.log(JSON.parse(response.data.json));

      if (response.data.status === "okay") {
        setVerificationStatus(true);
      }
    } catch (err) {
      setVerificationMessage(JSON.parse(err.data.json));
      console.log(err);
    }
  }

  useEffect(() => {
    verifyUniqueString(userId, uniqueString);
  }, []);

  return (
    <>
      {verificationStatus ? (
        <h1>
          `${verificationMessage}` You can now <Link to="/login">log in</Link>
        </h1>
      ) : (
        <h1>`${verificationMessage}`</h1>
      )}
    </>
  );
}
