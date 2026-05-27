# `googleNetworkConnectivityTransport` Submodule <a name="`googleNetworkConnectivityTransport` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityTransport <a name="GoogleNetworkConnectivityTransport" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport google_network_connectivity_transport}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport(scope: Construct, id: string, config: GoogleNetworkConnectivityTransportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig">GoogleNetworkConnectivityTransportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig">GoogleNetworkConnectivityTransportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdvertisedRoutes">resetAdvertisedRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAutoAccept">resetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetHub">resetHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetMtuLimit">resetMtuLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProvidedActivationKey">resetProvidedActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetPscRoutingEnabled">resetPscRoutingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetRemoteAccountId">resetRemoteAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkConnectivityTransportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdminEnabled"></a>

```typescript
public resetAdminEnabled(): void
```

##### `resetAdvertisedRoutes` <a name="resetAdvertisedRoutes" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAdvertisedRoutes"></a>

```typescript
public resetAdvertisedRoutes(): void
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetAutoAccept"></a>

```typescript
public resetAutoAccept(): void
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHub` <a name="resetHub" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetHub"></a>

```typescript
public resetHub(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMtuLimit` <a name="resetMtuLimit" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetMtuLimit"></a>

```typescript
public resetMtuLimit(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProvidedActivationKey` <a name="resetProvidedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetProvidedActivationKey"></a>

```typescript
public resetProvidedActivationKey(): void
```

##### `resetPscRoutingEnabled` <a name="resetPscRoutingEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetPscRoutingEnabled"></a>

```typescript
public resetPscRoutingEnabled(): void
```

##### `resetRemoteAccountId` <a name="resetRemoteAccountId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetRemoteAccountId"></a>

```typescript
public resetRemoteAccountId(): void
```

##### `resetStackType` <a name="resetStackType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetStackType"></a>

```typescript
public resetStackType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityTransport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isConstruct"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformElement"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformResource"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkConnectivityTransport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkConnectivityTransport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkConnectivityTransport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityTransport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.generatedActivationKey">generatedActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.peeringNetwork">peeringNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference">GoogleNetworkConnectivityTransportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabledInput">adminEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutesInput">advertisedRoutesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAcceptInput">autoAcceptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidthInput">bandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hubInput">hubInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimitInput">mtuLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKeyInput">providedActivationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabledInput">pscRoutingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountIdInput">remoteAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfileInput">remoteProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackTypeInput">stackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutes">advertisedRoutes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidth">bandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hub">hub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimit">mtuLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKey">providedActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabled">pscRoutingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountId">remoteAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfile">remoteProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackType">stackType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `generatedActivationKey`<sup>Required</sup> <a name="generatedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.generatedActivationKey"></a>

```typescript
public readonly generatedActivationKey: string;
```

- *Type:* string

---

##### `peeringNetwork`<sup>Required</sup> <a name="peeringNetwork" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.peeringNetwork"></a>

```typescript
public readonly peeringNetwork: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivityTransportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference">GoogleNetworkConnectivityTransportTimeoutsOutputReference</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabledInput"></a>

```typescript
public readonly adminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `advertisedRoutesInput`<sup>Optional</sup> <a name="advertisedRoutesInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutesInput"></a>

```typescript
public readonly advertisedRoutesInput: string[];
```

- *Type:* string[]

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAcceptInput"></a>

```typescript
public readonly autoAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hubInput`<sup>Optional</sup> <a name="hubInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hubInput"></a>

```typescript
public readonly hubInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mtuLimitInput`<sup>Optional</sup> <a name="mtuLimitInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimitInput"></a>

```typescript
public readonly mtuLimitInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `providedActivationKeyInput`<sup>Optional</sup> <a name="providedActivationKeyInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKeyInput"></a>

```typescript
public readonly providedActivationKeyInput: string;
```

- *Type:* string

---

##### `pscRoutingEnabledInput`<sup>Optional</sup> <a name="pscRoutingEnabledInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabledInput"></a>

```typescript
public readonly pscRoutingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteAccountIdInput`<sup>Optional</sup> <a name="remoteAccountIdInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountIdInput"></a>

```typescript
public readonly remoteAccountIdInput: string;
```

- *Type:* string

---

##### `remoteProfileInput`<sup>Optional</sup> <a name="remoteProfileInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfileInput"></a>

```typescript
public readonly remoteProfileInput: string;
```

- *Type:* string

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackTypeInput"></a>

```typescript
public readonly stackTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkConnectivityTransportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `advertisedRoutes`<sup>Required</sup> <a name="advertisedRoutes" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.advertisedRoutes"></a>

```typescript
public readonly advertisedRoutes: string[];
```

- *Type:* string[]

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mtuLimit`<sup>Required</sup> <a name="mtuLimit" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.mtuLimit"></a>

```typescript
public readonly mtuLimit: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `providedActivationKey`<sup>Required</sup> <a name="providedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.providedActivationKey"></a>

```typescript
public readonly providedActivationKey: string;
```

- *Type:* string

---

##### `pscRoutingEnabled`<sup>Required</sup> <a name="pscRoutingEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.pscRoutingEnabled"></a>

```typescript
public readonly pscRoutingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `remoteAccountId`<sup>Required</sup> <a name="remoteAccountId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteAccountId"></a>

```typescript
public readonly remoteAccountId: string;
```

- *Type:* string

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.remoteProfile"></a>

```typescript
public readonly remoteProfile: string;
```

- *Type:* string

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityTransportConfig <a name="GoogleNetworkConnectivityTransportConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.Initializer"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

const googleNetworkConnectivityTransportConfig: googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.name">name</a></code> | <code>string</code> | Name of the resource, see google.aip.dev/122 for resource naming. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.network">network</a></code> | <code>string</code> | Resource URL of the Network that will be peered with this Transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.region">region</a></code> | <code>string</code> | The region of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteProfile">remoteProfile</a></code> | <code>string</code> | Resource URL of the remoteTransportProfile that this Transport is connecting to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Administrative state of the underlying connectivity. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.advertisedRoutes">advertisedRoutes</a></code> | <code>string[]</code> | List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktn.IResolvable</code> | Controls whether resources proposed by the Transport are automatically accepted on behalf of the user. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.bandwidth">bandwidth</a></code> | <code>string</code> | Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.hub">hub</a></code> | <code>string</code> | The NCC Hub that the Transport should attach to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#id GoogleNetworkConnectivityTransport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.mtuLimit">mtuLimit</a></code> | <code>number</code> | [Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#project GoogleNetworkConnectivityTransport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.providedActivationKey">providedActivationKey</a></code> | <code>string</code> | Key used for establishing a connection with the remote transport. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.pscRoutingEnabled">pscRoutingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Controls whether a Routing VPC Spoke should be created and attached to the NCC Hub. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteAccountId">remoteAccountId</a></code> | <code>string</code> | The user supplied account id for the CSP associated with the remote profile. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.stackType">stackType</a></code> | <code>string</code> | IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource, see google.aip.dev/122 for resource naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#name GoogleNetworkConnectivityTransport#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Resource URL of the Network that will be peered with this Transport.

This field must be provided during resource creation and cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#network GoogleNetworkConnectivityTransport#network}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of this resource.

This is required to construct the resource name, but is not sent to the API since the region is already contained in the parent field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#region GoogleNetworkConnectivityTransport#region}

---

##### `remoteProfile`<sup>Required</sup> <a name="remoteProfile" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteProfile"></a>

```typescript
public readonly remoteProfile: string;
```

- *Type:* string

Resource URL of the remoteTransportProfile that this Transport is connecting to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#remote_profile GoogleNetworkConnectivityTransport#remote_profile}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Administrative state of the underlying connectivity.

If set to true (default), connectivity should be available between your environments. If set to false, the connectivity over these links is disabled. Disabling your Transport does not affect billing, and retains the underlying network bandwidth associated with the connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#admin_enabled GoogleNetworkConnectivityTransport#admin_enabled}

---

##### `advertisedRoutes`<sup>Optional</sup> <a name="advertisedRoutes" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.advertisedRoutes"></a>

```typescript
public readonly advertisedRoutes: string[];
```

- *Type:* string[]

List of IP Prefixes that will be advertised to the remote provider. Both IPv4 and IPv6 addresses are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#advertised_routes GoogleNetworkConnectivityTransport#advertised_routes}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Controls whether resources proposed by the Transport are automatically accepted on behalf of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#auto_accept GoogleNetworkConnectivityTransport#auto_accept}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

Bandwidth of the Transport. This must be one of the supported bandwidths for the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#bandwidth GoogleNetworkConnectivityTransport#bandwidth}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#deletion_policy GoogleNetworkConnectivityTransport#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#description GoogleNetworkConnectivityTransport#description}

---

##### `hub`<sup>Optional</sup> <a name="hub" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.hub"></a>

```typescript
public readonly hub: string;
```

- *Type:* string

The NCC Hub that the Transport should attach to.

The hub must be in the same project as the Transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#hub GoogleNetworkConnectivityTransport#hub}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#id GoogleNetworkConnectivityTransport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#labels GoogleNetworkConnectivityTransport#labels}

---

##### `mtuLimit`<sup>Optional</sup> <a name="mtuLimit" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.mtuLimit"></a>

```typescript
public readonly mtuLimit: number;
```

- *Type:* number

[Output only] The maximum transmission unit (MTU) of a packet that can be sent over this transport.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#mtu_limit GoogleNetworkConnectivityTransport#mtu_limit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#project GoogleNetworkConnectivityTransport#project}.

---

##### `providedActivationKey`<sup>Optional</sup> <a name="providedActivationKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.providedActivationKey"></a>

```typescript
public readonly providedActivationKey: string;
```

- *Type:* string

Key used for establishing a connection with the remote transport.

This key can only be provided if the profile supports an INPUT key flow and the resource is in the PENDING_KEY state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#provided_activation_key GoogleNetworkConnectivityTransport#provided_activation_key}

---

##### `pscRoutingEnabled`<sup>Optional</sup> <a name="pscRoutingEnabled" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.pscRoutingEnabled"></a>

```typescript
public readonly pscRoutingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Controls whether a Routing VPC Spoke should be created and attached to the NCC Hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#psc_routing_enabled GoogleNetworkConnectivityTransport#psc_routing_enabled}

---

##### `remoteAccountId`<sup>Optional</sup> <a name="remoteAccountId" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.remoteAccountId"></a>

```typescript
public readonly remoteAccountId: string;
```

- *Type:* string

The user supplied account id for the CSP associated with the remote profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#remote_account_id GoogleNetworkConnectivityTransport#remote_account_id}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

IP version stack for the established connectivity. Possible values: ["IPV4_IPV6", "IPV4_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#stack_type GoogleNetworkConnectivityTransport#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivityTransportTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#timeouts GoogleNetworkConnectivityTransport#timeouts}

---

### GoogleNetworkConnectivityTransportTimeouts <a name="GoogleNetworkConnectivityTransportTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.Initializer"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

const googleNetworkConnectivityTransportTimeouts: googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#create GoogleNetworkConnectivityTransport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#delete GoogleNetworkConnectivityTransport#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#update GoogleNetworkConnectivityTransport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#create GoogleNetworkConnectivityTransport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#delete GoogleNetworkConnectivityTransport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_connectivity_transport#update GoogleNetworkConnectivityTransport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityTransportTimeoutsOutputReference <a name="GoogleNetworkConnectivityTransportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivityTransport } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivityTransportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityTransport.GoogleNetworkConnectivityTransportTimeouts">GoogleNetworkConnectivityTransportTimeouts</a>

---



