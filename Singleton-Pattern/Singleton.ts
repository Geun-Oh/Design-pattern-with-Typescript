class Settings {
    static instance: Settings;
        public readonly mode = "dark";

    private constructor() {
        //생성자를 비공개로 만들어 인스턴스화하지 못하도록 만든다.
    }

    static getInstance(): Settings {
        //인스턴스가 이미 생성되어있는지 확인하고 아닐 경우에만 새로운 인스턴스를 생성한다.
        if(!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}

const settings = Settings.getInstance;