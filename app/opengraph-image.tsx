import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Powered Pipeline Pro - Revenue Command Center for MSPs'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    // Using standard flexbox for layout
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#020817', // background
                    backgroundImage: 'radial-gradient(circle at center, #1e293b 0%, #020817 100%)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                    }}
                >
                    {/* Logo Icon Mockup (Shield/P style) */}
                    <div
                        style={{
                            display: 'flex',
                            width: 80,
                            height: 80,
                            background: '#0ea5e9', // primary
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 20,
                            boxShadow: '0 0 50px -12px #0ea5e9',
                        }}
                    >
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 60,
                                fontWeight: 900,
                                color: 'white',
                                letterSpacing: '-0.05em',
                                lineHeight: 1,
                            }}
                        >
                            Powered Pipeline Pro
                        </div>
                        <div
                            style={{
                                fontSize: 30,
                                fontWeight: 500,
                                color: '#94a3b8', // muted-foreground
                                marginTop: 10,
                            }}
                        >
                            Revenue Command Center for MSPs
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
