import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

export function VerifyUserEmail() {
  let { userId } = useParams();
  let { uniqueString } = useParams();
  const [verificationStatus, setVerificationStatus] = useState(
    "Wait while we check your credentials"
  );

  async function verifyUniqueString(userId, uniqueString) {
    try {
      const response = await api.get("user/verify/:userId/:uniqueString", {
        userId: userId,
        uniqueString: uniqueString,
      });

      console.log(response.data);
      setVerificationStatus(console.log(response.data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>`${setVerificationStatus}`</h1>
    </>
  );
}
