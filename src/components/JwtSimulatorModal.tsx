import React, { useState } from 'react';
import { X, Lock, Key, ShieldCheck, CheckCircle2, Play, RefreshCw } from 'lucide-react';
import { sfx } from '../utils/sfx';

interface JwtSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JwtSimulatorModal: React.FC<JwtSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('sanjay_developer');
  const [role, setRole] = useState<'ROLE_USER' | 'ROLE_ADMIN'>('ROLE_USER');
  const [jwtToken, setJwtToken] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'token' | 'api'>('token');
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const generateToken = () => {
    sfx.playClick();
    setLoading(true);
    setTimeout(() => {
      // Mock Base64 JWT generation
      const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).replace(/=/g, '');
      const payload = btoa(
        JSON.stringify({
          sub: username,
          roles: [role],
          iss: 'Spring-Boot-Security-Sanjay',
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 3600,
        })
      ).replace(/=/g, '');
      const signature = btoa(username + '_signed_with_secret_key_17').substring(0, 32);

      const generated = `${header}.${payload}.${signature}`;
      setJwtToken(generated);
      setLoading(false);
      sfx.playSuccess();
    }, 400);
  };

  const testEndpoint = (endpoint: string) => {
    sfx.playClick();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (!jwtToken) {
        setApiResponse({
          timestamp: new Date().toISOString(),
          status: 401,
          error: 'Unauthorized',
          message: 'Full authentication is required to access this resource (Missing JWT Bearer token)',
          path: endpoint,
        });
        sfx.playBeep(300, 'sawtooth', 0.1);
        return;
      }

      if (endpoint.includes('/admin') && role !== 'ROLE_ADMIN') {
        setApiResponse({
          timestamp: new Date().toISOString(),
          status: 403,
          error: 'Forbidden',
          message: 'Access Denied: Required authority ROLE_ADMIN is missing from JWT payload.',
          path: endpoint,
        });
        sfx.playBeep(350, 'sawtooth', 0.1);
        return;
      }

      if (endpoint.includes('/admin')) {
        setApiResponse({
          status: 200,
          message: 'Admin Operation Executed Successfully',
          systemInfo: {
            database: 'MySQL 8.0 Connected',
            userManagement: 'Active (1,248 Users Registered)',
            authEngine: 'Spring Security 6 + JWT',
          },
          executedBy: username,
        });
        sfx.playSuccess();
      } else {
        setApiResponse({
          status: 200,
          message: 'User Profile Retrieved',
          user: {
            username: username,
            roles: [role],
            email: `${username}@sanjay-dev.com`,
            accountNonExpired: true,
            accountNonLocked: true,
          },
        });
        sfx.playSuccess();
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl glass-panel border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-[#0f1523] px-6 py-4 border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-white text-base flex items-center gap-2">
                JWT Auth & Spring Security Sandbox
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">JAVA 17</span>
              </h3>
              <p className="text-xs font-mono text-slate-400">Interactive User Management & Token Verification Engine</p>
            </div>
          </div>
          <button
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-[#0b0e17] px-6">
          <button
            onClick={() => setActiveTab('token')}
            className={`px-4 py-3 text-xs font-mono font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'token'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Key className="w-4 h-4" /> 1. TOKEN GENERATION
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-4 py-3 text-xs font-mono font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'api'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> 2. PROTECTED REST ENDPOINTS
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto font-sans">
          {activeTab === 'token' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-1.5">USERNAME / SUB</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#111726] border border-cyan-500/30 rounded-lg px-3 py-2 text-sm text-slate-100 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyan-400 mb-1.5">SPRING SECURITY ROLE</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full bg-[#111726] border border-cyan-500/30 rounded-lg px-3 py-2 text-sm text-slate-100 font-mono focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="ROLE_USER">ROLE_USER (Standard User)</option>
                    <option value="ROLE_ADMIN">ROLE_ADMIN (Full Privileges)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={generateToken}
                disabled={loading}
                className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-orbitron font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Key className="w-4 h-4" />}
                GENERATE SIGNED JWT BEARER TOKEN
              </button>

              {/* JWT Output Preview */}
              {jwtToken && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-xs text-slate-300 font-semibold flex items-center justify-between">
                    <span>MOCK JWT BEARER TOKEN (HS256):</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> SIGNED BY SPRING SECURITY
                    </span>
                  </div>

                  <div className="p-3 bg-[#0a0d14] rounded-lg border border-cyan-500/30 break-all text-cyan-300 leading-relaxed font-mono">
                    <span className="text-red-400">{jwtToken.split('.')[0]}</span>.
                    <span className="text-purple-400">{jwtToken.split('.')[1]}</span>.
                    <span className="text-emerald-400">{jwtToken.split('.')[2]}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[11px] text-center pt-1">
                    <div className="p-2 bg-red-950/20 border border-red-500/30 rounded text-red-300">
                      Header: Alg & Typ
                    </div>
                    <div className="p-2 bg-purple-950/20 border border-purple-500/30 rounded text-purple-300">
                      Payload: Sub & Roles
                    </div>
                    <div className="p-2 bg-emerald-950/20 border border-emerald-500/30 rounded text-emerald-300">
                      Signature: HMACSHA256
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-5">
              <div className="text-xs font-mono text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                Current Token Status:{' '}
                {jwtToken ? (
                  <span className="text-emerald-400 font-bold">PRESENT ({role})</span>
                ) : (
                  <span className="text-red-400 font-bold">NO TOKEN (AUTH REQUIRED)</span>
                )}
              </div>

              {/* Endpoint Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <button
                  onClick={() => testEndpoint('/api/v1/user/profile')}
                  className="p-3 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-left transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-white">GET /api/v1/user/profile</div>
                    <div className="text-[10px] text-slate-400">Requires: ROLE_USER or ROLE_ADMIN</div>
                  </div>
                  <Play className="w-4 h-4 text-cyan-400" />
                </button>

                <button
                  onClick={() => testEndpoint('/api/v1/admin/users')}
                  className="p-3 rounded-lg bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 text-left transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-white">DELETE /api/v1/admin/users</div>
                    <div className="text-[10px] text-slate-400">Requires: ROLE_ADMIN only</div>
                  </div>
                  <Play className="w-4 h-4 text-purple-400" />
                </button>
              </div>

              {/* Live HTTP Response Card */}
              {apiResponse && (
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-300 font-semibold">
                    <span>SPRING SECURITY HTTP RESPONSE:</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        apiResponse.status === 200
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-red-500/20 text-red-400 border border-red-500/40'
                      }`}
                    >
                      STATUS {apiResponse.status}
                    </span>
                  </div>

                  <pre className="p-4 bg-[#0a0d14] rounded-lg border border-slate-800 text-slate-200 overflow-x-auto">
                    {JSON.stringify(apiResponse, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
