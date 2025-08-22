// src/app/services/storage.service.ts
// Thin wrapper around Web Storage that only accesses localStorage in the browser.
// Provides simple JSON get/save/remove helpers and guards against server-side contexts.
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    // Only access localStorage when running in a browser
    if (isPlatformBrowser(this.platformId)) {
      this.storage = localStorage;
    }
  }

  // Get data from storage
  getData<T>(key: string): T | null {
    if (!this.storage) return null;
    
    const data = this.storage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Save data to storage
  saveData<T>(key: string, data: T): void {
    if (!this.storage) return;
    
    this.storage.setItem(key, JSON.stringify(data));
  }

  // Remove data from storage
  removeData(key: string): void {
    if (!this.storage) return;
    
    this.storage.removeItem(key);
  }

  // Clear all data from storage
  clearData(): void {
    if (!this.storage) return;
    
    this.storage.clear();
  }
}