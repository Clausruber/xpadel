
import React, { useState } from 'react';
import { BottomNav } from './components/Navigation';
import { HomeScreen } from './screens/Home';
import { NewsScreen } from './screens/News';
import { NewsDetailScreen } from './screens/NewsDetail';
import { ProfileScreen } from './screens/Profile';
import { TournamentsScreen } from './screens/Tournaments';
import { BookCourtScreen } from './screens/BookCourt';
import { PaymentScreen } from './screens/Payment';
import { ConfirmationScreen } from './screens/Confirmation';
import { SpecialistsScreen } from './screens/Specialists';
import { SpecialistDetailScreen } from './screens/SpecialistDetail';
import { SpecialistConfirmationScreen } from './screens/SpecialistConfirmation';
import { MyReservationsScreen } from './screens/MyReservations';
import { ScreenName } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(ScreenName.HOME);
  const [history, setHistory] = useState<ScreenName[]>([ScreenName.HOME]);

  const handleNavigate = (screen: ScreenName) => {
    setHistory([...history, screen]);
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    } else {
      // Fallback if history empty
      setCurrentScreen(ScreenName.HOME);
    }
  };

  // Determine if we should show bottom nav
  const showBottomNav = [
    ScreenName.HOME,
    ScreenName.NEWS,
    ScreenName.MY_RESERVATIONS,
    ScreenName.PROFILE
  ].includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenName.HOME:
        return <HomeScreen onNavigate={handleNavigate} />;
      case ScreenName.NEWS:
        return <NewsScreen onNavigate={handleNavigate} />;
      case ScreenName.NEWS_DETAIL:
        return <NewsDetailScreen onBack={handleBack} />;
      case ScreenName.PROFILE:
        return <ProfileScreen onBack={handleBack} />;
      case ScreenName.TOURNAMENTS:
        return <TournamentsScreen onBack={handleBack} />;
      case ScreenName.BOOK_COURT:
        return <BookCourtScreen onBack={handleBack} onNavigate={handleNavigate} />;
      case ScreenName.PAYMENT:
        return <PaymentScreen onBack={handleBack} onNavigate={handleNavigate} />;
      case ScreenName.CONFIRMATION:
        return <ConfirmationScreen onNavigate={handleNavigate} />;
      case ScreenName.SPECIALISTS:
        return <SpecialistsScreen onBack={handleBack} onNavigate={handleNavigate} />;
      case ScreenName.SPECIALIST_DETAIL:
        return <SpecialistDetailScreen onBack={handleBack} onNavigate={handleNavigate} />;
      case ScreenName.SPECIALIST_CONFIRMATION:
        return <SpecialistConfirmationScreen onNavigate={handleNavigate} />;
      case ScreenName.MY_RESERVATIONS:
        return <MyReservationsScreen onBack={handleBack} onNavigate={handleNavigate} />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="mx-auto max-w-md bg-white min-h-screen shadow-2xl relative overflow-hidden">
      {renderScreen()}
      
      {showBottomNav && (
        <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
      )}
    </div>
  );
}
