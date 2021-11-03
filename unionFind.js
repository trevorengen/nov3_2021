// QUICK FIND VERSION.
class UnionQuickFind {
    constructor(size) {
        this.root = [];
        for (let i=0; i<size; i++) {
            this.root.push(i);
        }
    }

    find(x) {
        return this.root(x);
    }

    union(x,y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            for (let i=0; i<this.root.length; i++) {
                if (this.root[i] === rootY) {
                    this.root[i] = rootX;
                }
            }
        }
    }

    connected(x,y) {
        return this.find(x) === this.find(y);
    }
}


// QUICK UNION VERSION
class QuickUnionFind {
    constructor(size) {
        this.root = [];
        for (let i=0; i<size; i++) {
            this.root.push(i);
        }
    }

    find(x) {
        while (x !== this.root[x]) {
            x = this.root[x];
        }
        return x;
    }

    union(x,y) {
        rootX = this.find(x);
        rootY = this.find(y);
        if (rootX !== rootY) {
            this.root[rootY] = rootX;
        }
    }

    connected(x,y) {
        return this.find(x) === this.find(y);
    }
}