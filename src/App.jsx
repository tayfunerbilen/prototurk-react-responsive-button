import ButtonGroups from "./components/button-groups/index.jsx";

function App() {

    return (
        <div className="p-4 container mx-auto">

            <header className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Hoşgeldin</h3>
                <nav className="flex gap-2.5">

                    <ButtonGroups
                        autoClose={true}
                        buttons={[
                            {
                                title: 'Yeni Ekle',
                                attributes: {
                                    size: 'small',
                                    onClick: () => alert('ekle!')
                                }
                            },
                            {
                                title: 'Ayarlar',
                                attributes: {
                                    size: 'small'
                                }
                            },
                            {
                                title: 'Çıkış yap',
                                attributes: {
                                    size: 'small',
                                    variant: 'danger'
                                }
                            }
                        ]}
                    />

                </nav>
            </header>

            {/*<Button size="small">Hello World</Button>*/}
            {/*<Button>Hello World</Button>*/}
            {/*<Button size="large">Hello World</Button>*/}
            {/*<Button variant="warning">Hello World</Button>*/}
            {/*<Button variant="success">Hello World</Button>*/}
        </div>
    )
}

export default App
