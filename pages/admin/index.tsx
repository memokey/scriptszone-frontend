import React, { useEffect, useState } from "react";
import Logo from "../../components/Layout/Header/Logo";
import PrimaryButton from "../../components/Common/Buttons/PrimaryButton";
import WalletButton from "../../components/Admin/WalletButton";
import { usePrivy } from "@privy-io/react-auth";
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import MenuItems from "../../components/Layout/Header/MenuItems";
import { MENU_LIST } from "../../data/header";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Card } from "../../components/Common/Cards";
import PasteView from "../../components/Pastes/PasteView";
import Paste from "../../components/Pastes/Paste";
import Paginator from "../../components/Common/Paginator";
import { usePagination } from "../../hooks/usePagination";
import { apiCaller } from "../../utils/fetcher";
import { convertDateFormat } from "../../utils";
import { setPastes } from "../../redux/slices/authSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const { pastes, debouncedValue } = useSelector((state: RootStateOrAny) => ({
    pastes: state.auth.pastes,
    debouncedValue: state.auth.debouncedValue,
  }));
  const {
    ready, 
    authenticated, 
  } = usePrivy();

  const [currentPage, setCurrentPage] = useState(1);
  const [siblingCount, setSiblingCount] = useState(2);
  const [pageSize, setPageSize] = useState(10);
  const [pasteCount, setPasteCount] = useState(0);
  const [oldSort, setOldSort] = useState(false)

  const paginationRange = usePagination({
    currentPage: currentPage,
    totalCount: pasteCount,
    siblingCount: siblingCount,
    pageSize: pageSize,
  });

  useEffect(() => {
    if(pageSize == 0) {
      return;
    }
    let firstPageIndex = (currentPage - 1) * pageSize;
    let lastPageIndex = firstPageIndex + pageSize;

    if(pasteCount <= lastPageIndex) {
      lastPageIndex = pasteCount;
    }
    if(firstPageIndex + lastPageIndex != 0) {
      fetchPastes(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, pasteCount]);

  useEffect(() => {
    // Call your search function here
    fetchPasteCount();
  }, []);

  useEffect(() => {
    // Call your search function here
    fetchPasteCount();
  }, [debouncedValue]);

  const fetchPasteCount = async () => {
    const res: any = await apiCaller.post('/pastes/fetchpastecount', {searchValue: debouncedValue});
    setPasteCount(res.data.pasteCount);
  }

  const fetchPastes = async (firstPageIndex, lastPageIndex) => {
    const res: any = await apiCaller.post('/pastes/fetchpastes', {searchValue: debouncedValue, oldSort: oldSort, firstPageIndex, lastPageIndex});
    let pastes = [];
    if(res.data.pastes) {
      res.data.pastes.forEach(paste => {
        pastes.push({
          id: paste._id,
          title: paste.title,
          description: paste.description,
          scripts: paste.scripts,
          views: paste.views,
          gameLink: paste.gameLink,
          date: convertDateFormat(paste.createdAt)
        })
      });
    }
    dispatch(setPastes(pastes));
  }

  return (
    <AdminLayout>
      {ready && authenticated && (
        <div className="w-[1369px] mx-auto ">
            {pastes && (
              pastes.map((paste, index) => (
                <div className="grid grid-cols-12 gap-[36px]">
                  <div className="col-span-7">
                    <Paste
                      key={index}
                      {...paste} 
                    />
                  </div>
                  <div className="col-span-5">
                    <PasteView key={index} views={paste.views}/>
                  </div>

                </div>
              ))
            )}
          <div className="mx-auto my-10">
            <Paginator 
              currentPage={currentPage}
              totalCount={pasteCount}
              siblingCount={siblingCount}
              pageSize={pageSize}
              paginationRange={paginationRange}
              setCurrentPage={setCurrentPage}
            /> 
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Admin;