import React, {useEffect, useState} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { DEFAULT_LANG, LocalStorageKey, RouteUrl } from './models/constant.model';
import './App.css';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/main.css';
import './assets/css/style.css';
import './assets/css/font.css';
import './assets/css/fa.min.css';
import { useTranslation } from 'react-i18next';

if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap.bundle.min");
}

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
)

const Home = React.lazy(() => import('./pages/home'));
const Login = React.lazy(() => import('./pages/login'));
const Register = React.lazy(() => import('./pages/register'));
const Market = React.lazy(() => import('./pages/market'));
const Chart = React.lazy(() => import('./pages/chart'));
const Trade = React.lazy(() => import('./pages/trade'));
const Account = React.lazy(() => import('./pages/account'));
const SelectSymbol = React.lazy(() => import('./pages/select-symbol'));
const EditSymbol = React.lazy(() => import('./pages/edit-symbol'));
const Neworder = React.lazy(() => import('./pages/new-order'));
const Deposit = React.lazy(() => import('./pages/deposit'));
const Withdraw = React.lazy(() => import('./pages/withdraw'));
const TwoFactorAuthen = React.lazy(() => import('./pages/two-factor-authen'));
const WithdrawConfirmation  = React.lazy(() => import('./pages/withdraw-confirm'));
const BalanceCovert = React.lazy(() => import('./pages/convert'));
const TransactionHistory = React.lazy(() => import('./pages/transaction-history'));
const ActiveAccount = React.lazy(() => import('./pages/active-account'));
const ForgotPassword = React.lazy(() => import('./pages/forgot-pass'));
const UpdatePassword  = React.lazy(() => import('./pages/update-password'));
const Setting  = React.lazy(() => import('./pages/setting'));
const Affiliate = React.lazy(() => import('./pages/affiliate'));
const UpdatePosition = React.lazy(() => import('./pages/update-position'));
const ClosePosition = React.lazy(() => import('./pages/close-position'));
const CopyTrade = React.lazy(() => import('./pages/copy-trade')); 
const Followers = React.lazy(() => import('./pages/followers')); 
const RewardSetting = React.lazy(() => import('./pages/reward-setting')); 

const App = () => {
	const {i18n} = useTranslation();
	let currentLanguage = DEFAULT_LANG;
    if (localStorage.getItem(LocalStorageKey.LANGUAGE))
        currentLanguage = localStorage.getItem(LocalStorageKey.LANGUAGE) as string;

    const [language, setLanguage] = useState(currentLanguage);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])

	return (
		<BrowserRouter>
			<React.Suspense fallback={loading}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={RouteUrl.LOGIN} element={<Login />} />
					<Route path={RouteUrl.REGISTER} element={<Register />} />
					<Route path={RouteUrl.MARKET} element={<Market />} />
					<Route path={RouteUrl.CHART} element={<Chart />} />
					<Route path={RouteUrl.TRADE} element={<Trade />} />
					<Route path={RouteUrl.ACCOUNT} element={<Account />} />
					<Route path={RouteUrl.SELECT_SYMBOL} element={<SelectSymbol />} />
					<Route path={RouteUrl.EDIT_SYMBOL} element={<EditSymbol />} />
					<Route path={RouteUrl.NEW_ORDER} element={<Neworder />} />
					<Route path={RouteUrl.DEPOSIT} element={<Deposit />} />
					<Route path={RouteUrl.WITHDRAW} element={<Withdraw />} />
					<Route path={RouteUrl.TWO_FACTOR} element={<TwoFactorAuthen />} />
					<Route path={RouteUrl.WITHDRAW_CONFIRM} element={<WithdrawConfirmation />} />
					<Route path={RouteUrl.HISTORY} element={<TransactionHistory />} />
					<Route path={RouteUrl.ACTIVE_ACCOUNT} element={<ActiveAccount />} />
					<Route path={RouteUrl.RESET_PASSWORD} element={<ForgotPassword />} />
					<Route path={RouteUrl.UPDATE_PASSWORD} element={<UpdatePassword />} />
					<Route path={RouteUrl.SETTING} element={<Setting />} />
					<Route path={RouteUrl.AFFILIATE} element={<Affiliate />} />
					<Route path={RouteUrl.UPDATE_POSITION} element={<UpdatePosition />} />
					<Route path={RouteUrl.CLOSE_POSITION} element={<ClosePosition />} />
					<Route path={RouteUrl.COPY_TRADE} element={<CopyTrade />} />
					<Route path={RouteUrl.FOLLOWERS} element={<Followers />} />
					<Route path={RouteUrl.REWARD_SETTING} element={<RewardSetting />} />
					<Route path="*" element={<Login />} />
				</Routes>
			</React.Suspense>
			<ToastContainer theme="colored" />
		</BrowserRouter>
  	)
}

export default App;