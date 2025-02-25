import { Button } from '@nextui-org/react';
import { Bell, History, Home, Menu, Scissors, User, X } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { ModelPosts } from './ModelPosts';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { TreatmentHistory } from './TreatmentHistory';

type Page = 'dashboard' | 'model-posts' | 'profile' | 'notifications' | 'history';

export const AdminLayout: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('dashboard');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { key: 'dashboard', label: 'ダッシュボード', icon: Home },
        { key: 'model-posts', label: 'カットモデル募集', icon: Scissors },
        { key: 'profile', label: 'プロフィール', icon: User },
        { key: 'notifications', label: '通知', icon: Bell },
        { key: 'history', label: '施術履歴', icon: History },
    ] as const;

    const renderContent = () => {
        switch (currentPage) {
            case 'dashboard':
                return <Dashboard />;
            case 'model-posts':
                return <ModelPosts />;
            case 'profile':
                return <Profile />;
            case 'notifications':
                return <Notifications />;
            case 'history':
                return <TreatmentHistory />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 lg:hidden">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-0 lg:py-0 flex items-center justify-between">
                    <div className="flex items-center">
                        <Scissors className="h-8 w-8 text-pink-600" />
                        <h1 className="ml-3 text-2xl font-semibold text-gray-900"></h1>
                    </div>
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-600" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-600" />
                        )}
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="pt-8 lg:pl-64 lg:pt-0">
                {/* Sidebar */}
                <nav
                    className={`fixed z-40 left-0 top-16 sm:top-0 top-0 h-[100vh] w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="p-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Button
                                    key={item.key}
                                    className={`w-full justify-start ${currentPage === item.key
                                        ? 'bg-pink-50 text-pink-600'
                                        : 'bg-transparent text-gray-600 hover:bg-gray-50'
                                        }`}
                                    variant="light"
                                    startContent={<Icon className="h-5 w-5" />}
                                    onClick={() => {
                                        setCurrentPage(item.key);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </Button>
                            );
                        })}
                    </div>
                </nav>

                {/* Content */}
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};