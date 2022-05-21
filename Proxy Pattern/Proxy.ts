interface Image {
    displayImage(): void;
}

class RealImage implements Image {
    constructor(private fileName: string) {
        this.fileName = fileName;
    }
    
    private loadFromDisk(fileName: string) {
        console.log("로딩: ", this.fileName);
    }

    //Override
    public displayImage(): void {
        console.log("보여주기: ", this.fileName);
    }
} 

class ProxyImage implements Image {
    constructor(private fileName: string, private realImage?: RealImage) {
        this.fileName = fileName;
        this.realImage = realImage;
    }

    //Override
    public displayImage(): void {
        if(this.realImage === undefined) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.displayImage();
    }
}

class ProxyPattern {
    public main(args: string): void {
        const image1: Image = new ProxyImage("test1.jpg");
        const image2: Image = new ProxyImage("test2.jpg");

        image1.displayImage();
        image2.displayImage();
    }
}