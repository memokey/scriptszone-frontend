import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../../Layout/Header/Logo";
import { usePrivy } from "@privy-io/react-auth";
import PrimaryButton from "../../../Common/Buttons/PrimaryButton";
import WalletButton from "../../WalletButton";
import { setAuthToken, setDebouncedValue, setPastes } from "../../../../redux/slices/authSlice";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { apiCaller } from "../../../../utils/fetcher";
import { convertDateFormat } from "../../../../utils";
import MenuItems from "../../../Layout/Header/MenuItems";
import { MENU_ADMIN_LIST } from "../../../../data/header";

const AdminHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { debouncedValue } = useSelector((state: RootStateOrAny) => ({
    debouncedValue: state.auth.debouncedValue,
  }));

  const {
    ready, 
    authenticated, 
    getAccessToken 
  } = usePrivy();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getAuthToken = async () => {
      const token = await getAccessToken();
      dispatch(setAuthToken(token))
    }

    if(ready && authenticated) {
      getAuthToken();
    }
  }, [ready, authenticated]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setDebouncedValue(searchValue));
    }, 500); // 500ms delay

    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  return (
    <div className="flex justify-between py-[30px] items-center mx-[132px]">
      <div className="flex gap-12">
        <Logo onClick={() => {
          router.push('/admin');
        }}/>
        {ready && authenticated && (
          <MenuItems menus={MENU_ADMIN_LIST} />
        )}
      </div>
      {ready && authenticated && (
        <input 
          type="text" 
          className="px-6 py-3 border border-[#E9E9E9] rounded-[6px] focus:outline-none" 
          placeholder="Search scripts..." 
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      )}
      <div className="flex gap-8 items-center">
        {ready && authenticated && (
          <PrimaryButton
            caption="New Paste"
            onClick={() => {
              router.push('/newadminpaste');
            }}
          />
        )}
        <WalletButton />
      </div>
    </div>
  );
}

export default AdminHeader;