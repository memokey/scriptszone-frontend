import React, { useState } from "react";
import { Card } from "../../components/Common/Cards";
import Layout from "../../components/Layout";
import PrimaryButton from "../../components/Common/Buttons/PrimaryButton";
import { MessageIcon } from "../../components/Icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { apiCaller } from "../../utils/fetcher";

const newPaste = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const res = await apiCaller.post('/pastes/mailerlite', {email});
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
}

  return (
    <Layout>
      <div className="mx-[132px]">
        <Card title="New Paste *" style="mb-[80px]">
          <p className="mb-12 text-grey">
            Paste your script here <br/><br/>
            jk... <span className="text-primary">Scriptszone</span> is in development, stay tuned for the release and <span className="text-secondary">creator program</span> where you can <span className="text-[#00D649]">get PAID</span>
          </p>
        </Card>
        <div className="mx-[208px] mb-[40px]">
          <Card style="px-[60px]">
            <h2 className="text-secondary text-[57px] font-bold text-center">Get notified</h2>
            <p className="text-black text-[27px] font-medium mb-8 text-center">For the full release of Scripts Zone</p>
            <input 
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-6 py-3 border border-[#E9E9E9] rounded-[6px] focus:outline-none" 
              placeholder="Email Address" 
            />
            <div className="flex justify-center mt-[20px]">
              <PrimaryButton
                icon={<MessageIcon />}
                caption="Send Email Confirmation"
                onClick={submitForm} 
              />
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default newPaste;