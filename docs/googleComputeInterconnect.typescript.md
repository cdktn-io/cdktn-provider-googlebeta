# `googleComputeInterconnect` Submodule <a name="`googleComputeInterconnect` Submodule" id="@cdktn/provider-google-beta.googleComputeInterconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnect <a name="GoogleComputeInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect google_compute_interconnect}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnect(scope: Construct, id: string, config: GoogleComputeInterconnectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig">GoogleComputeInterconnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig">GoogleComputeInterconnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putApplicationAwareInterconnect">putApplicationAwareInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putMacsec">putMacsec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetAaiEnabled">resetAaiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetApplicationAwareInterconnect">resetApplicationAwareInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetCustomerName">resetCustomerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsec">resetMacsec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsecEnabled">resetMacsecEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetNocContactEmail">resetNocContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRemoteLocation">resetRemoteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRequestedFeatures">resetRequestedFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationAwareInterconnect` <a name="putApplicationAwareInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putApplicationAwareInterconnect"></a>

```typescript
public putApplicationAwareInterconnect(value: GoogleComputeInterconnectApplicationAwareInterconnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putApplicationAwareInterconnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect">GoogleComputeInterconnectApplicationAwareInterconnect</a>

---

##### `putMacsec` <a name="putMacsec" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putMacsec"></a>

```typescript
public putMacsec(value: GoogleComputeInterconnectMacsec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putMacsec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putParams"></a>

```typescript
public putParams(value: GoogleComputeInterconnectParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams">GoogleComputeInterconnectParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeInterconnectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>

---

##### `resetAaiEnabled` <a name="resetAaiEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetAaiEnabled"></a>

```typescript
public resetAaiEnabled(): void
```

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetAdminEnabled"></a>

```typescript
public resetAdminEnabled(): void
```

##### `resetApplicationAwareInterconnect` <a name="resetApplicationAwareInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetApplicationAwareInterconnect"></a>

```typescript
public resetApplicationAwareInterconnect(): void
```

##### `resetCustomerName` <a name="resetCustomerName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetCustomerName"></a>

```typescript
public resetCustomerName(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMacsec` <a name="resetMacsec" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsec"></a>

```typescript
public resetMacsec(): void
```

##### `resetMacsecEnabled` <a name="resetMacsecEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsecEnabled"></a>

```typescript
public resetMacsecEnabled(): void
```

##### `resetNocContactEmail` <a name="resetNocContactEmail" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetNocContactEmail"></a>

```typescript
public resetNocContactEmail(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemoteLocation` <a name="resetRemoteLocation" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRemoteLocation"></a>

```typescript
public resetRemoteLocation(): void
```

##### `resetRequestedFeatures` <a name="resetRequestedFeatures" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRequestedFeatures"></a>

```typescript
public resetRequestedFeatures(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeInterconnect resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isConstruct"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

googleComputeInterconnect.GoogleComputeInterconnect.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformElement"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

googleComputeInterconnect.GoogleComputeInterconnect.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformResource"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

googleComputeInterconnect.GoogleComputeInterconnect.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeInterconnect resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInterconnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInterconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.applicationAwareInterconnect">applicationAwareInterconnect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference">GoogleComputeInterconnectApplicationAwareInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.availableFeatures">availableFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.circuitInfos">circuitInfos</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList">GoogleComputeInterconnectCircuitInfosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.expectedOutages">expectedOutages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList">GoogleComputeInterconnectExpectedOutagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleIpAddress">googleIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleReferenceId">googleReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectAttachments">interconnectAttachments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectGroups">interconnectGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsec">macsec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference">GoogleComputeInterconnectMacsecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.operationalStatus">operationalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference">GoogleComputeInterconnectParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.peerIpAddress">peerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisionedLinkCount">provisionedLinkCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.satisfiesPzs">satisfiesPzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference">GoogleComputeInterconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.wireGroups">wireGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.aaiEnabledInput">aaiEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabledInput">adminEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.applicationAwareInterconnectInput">applicationAwareInterconnectInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect">GoogleComputeInterconnectApplicationAwareInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerNameInput">customerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectTypeInput">interconnectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkTypeInput">linkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabledInput">macsecEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecInput">macsecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmailInput">nocContactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams">GoogleComputeInterconnectParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocationInput">remoteLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeaturesInput">requestedFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCountInput">requestedLinkCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.aaiEnabled">aaiEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerName">customerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectType">interconnectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkType">linkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabled">macsecEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmail">nocContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocation">remoteLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeatures">requestedFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCount">requestedLinkCount</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationAwareInterconnect`<sup>Required</sup> <a name="applicationAwareInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.applicationAwareInterconnect"></a>

```typescript
public readonly applicationAwareInterconnect: GoogleComputeInterconnectApplicationAwareInterconnectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference">GoogleComputeInterconnectApplicationAwareInterconnectOutputReference</a>

---

##### `availableFeatures`<sup>Required</sup> <a name="availableFeatures" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.availableFeatures"></a>

```typescript
public readonly availableFeatures: string[];
```

- *Type:* string[]

---

##### `circuitInfos`<sup>Required</sup> <a name="circuitInfos" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.circuitInfos"></a>

```typescript
public readonly circuitInfos: GoogleComputeInterconnectCircuitInfosList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList">GoogleComputeInterconnectCircuitInfosList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `expectedOutages`<sup>Required</sup> <a name="expectedOutages" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.expectedOutages"></a>

```typescript
public readonly expectedOutages: GoogleComputeInterconnectExpectedOutagesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList">GoogleComputeInterconnectExpectedOutagesList</a>

---

##### `googleIpAddress`<sup>Required</sup> <a name="googleIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleIpAddress"></a>

```typescript
public readonly googleIpAddress: string;
```

- *Type:* string

---

##### `googleReferenceId`<sup>Required</sup> <a name="googleReferenceId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleReferenceId"></a>

```typescript
public readonly googleReferenceId: string;
```

- *Type:* string

---

##### `interconnectAttachments`<sup>Required</sup> <a name="interconnectAttachments" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectAttachments"></a>

```typescript
public readonly interconnectAttachments: string[];
```

- *Type:* string[]

---

##### `interconnectGroups`<sup>Required</sup> <a name="interconnectGroups" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectGroups"></a>

```typescript
public readonly interconnectGroups: string[];
```

- *Type:* string[]

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `macsec`<sup>Required</sup> <a name="macsec" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsec"></a>

```typescript
public readonly macsec: GoogleComputeInterconnectMacsecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference">GoogleComputeInterconnectMacsecOutputReference</a>

---

##### `operationalStatus`<sup>Required</sup> <a name="operationalStatus" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.operationalStatus"></a>

```typescript
public readonly operationalStatus: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.params"></a>

```typescript
public readonly params: GoogleComputeInterconnectParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference">GoogleComputeInterconnectParamsOutputReference</a>

---

##### `peerIpAddress`<sup>Required</sup> <a name="peerIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.peerIpAddress"></a>

```typescript
public readonly peerIpAddress: string;
```

- *Type:* string

---

##### `provisionedLinkCount`<sup>Required</sup> <a name="provisionedLinkCount" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisionedLinkCount"></a>

```typescript
public readonly provisionedLinkCount: number;
```

- *Type:* number

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.satisfiesPzs"></a>

```typescript
public readonly satisfiesPzs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInterconnectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference">GoogleComputeInterconnectTimeoutsOutputReference</a>

---

##### `wireGroups`<sup>Required</sup> <a name="wireGroups" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.wireGroups"></a>

```typescript
public readonly wireGroups: string[];
```

- *Type:* string[]

---

##### `aaiEnabledInput`<sup>Optional</sup> <a name="aaiEnabledInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.aaiEnabledInput"></a>

```typescript
public readonly aaiEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabledInput"></a>

```typescript
public readonly adminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationAwareInterconnectInput`<sup>Optional</sup> <a name="applicationAwareInterconnectInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.applicationAwareInterconnectInput"></a>

```typescript
public readonly applicationAwareInterconnectInput: GoogleComputeInterconnectApplicationAwareInterconnect;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect">GoogleComputeInterconnectApplicationAwareInterconnect</a>

---

##### `customerNameInput`<sup>Optional</sup> <a name="customerNameInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerNameInput"></a>

```typescript
public readonly customerNameInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectTypeInput`<sup>Optional</sup> <a name="interconnectTypeInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectTypeInput"></a>

```typescript
public readonly interconnectTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `linkTypeInput`<sup>Optional</sup> <a name="linkTypeInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkTypeInput"></a>

```typescript
public readonly linkTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `macsecEnabledInput`<sup>Optional</sup> <a name="macsecEnabledInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabledInput"></a>

```typescript
public readonly macsecEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `macsecInput`<sup>Optional</sup> <a name="macsecInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecInput"></a>

```typescript
public readonly macsecInput: GoogleComputeInterconnectMacsec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nocContactEmailInput`<sup>Optional</sup> <a name="nocContactEmailInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmailInput"></a>

```typescript
public readonly nocContactEmailInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.paramsInput"></a>

```typescript
public readonly paramsInput: GoogleComputeInterconnectParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams">GoogleComputeInterconnectParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remoteLocationInput`<sup>Optional</sup> <a name="remoteLocationInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocationInput"></a>

```typescript
public readonly remoteLocationInput: string;
```

- *Type:* string

---

##### `requestedFeaturesInput`<sup>Optional</sup> <a name="requestedFeaturesInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeaturesInput"></a>

```typescript
public readonly requestedFeaturesInput: string[];
```

- *Type:* string[]

---

##### `requestedLinkCountInput`<sup>Optional</sup> <a name="requestedLinkCountInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCountInput"></a>

```typescript
public readonly requestedLinkCountInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeInterconnectTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>

---

##### `aaiEnabled`<sup>Required</sup> <a name="aaiEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.aaiEnabled"></a>

```typescript
public readonly aaiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customerName`<sup>Required</sup> <a name="customerName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerName"></a>

```typescript
public readonly customerName: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnectType`<sup>Required</sup> <a name="interconnectType" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectType"></a>

```typescript
public readonly interconnectType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `linkType`<sup>Required</sup> <a name="linkType" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkType"></a>

```typescript
public readonly linkType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `macsecEnabled`<sup>Required</sup> <a name="macsecEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabled"></a>

```typescript
public readonly macsecEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nocContactEmail`<sup>Required</sup> <a name="nocContactEmail" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmail"></a>

```typescript
public readonly nocContactEmail: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `remoteLocation`<sup>Required</sup> <a name="remoteLocation" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocation"></a>

```typescript
public readonly remoteLocation: string;
```

- *Type:* string

---

##### `requestedFeatures`<sup>Required</sup> <a name="requestedFeatures" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeatures"></a>

```typescript
public readonly requestedFeatures: string[];
```

- *Type:* string[]

---

##### `requestedLinkCount`<sup>Required</sup> <a name="requestedLinkCount" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCount"></a>

```typescript
public readonly requestedLinkCount: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectApplicationAwareInterconnect <a name="GoogleComputeInterconnectApplicationAwareInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectApplicationAwareInterconnect: googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.bandwidthPercentagePolicy">bandwidthPercentagePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy</a></code> | bandwidth_percentage_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.profileDescription">profileDescription</a></code> | <code>string</code> | A description for the AAI profile on this interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.shapeAveragePercentage">shapeAveragePercentage</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>[]</code> | shape_average_percentage block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.strictPriorityPolicy">strictPriorityPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy</a></code> | strict_priority_policy block. |

---

##### `bandwidthPercentagePolicy`<sup>Optional</sup> <a name="bandwidthPercentagePolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.bandwidthPercentagePolicy"></a>

```typescript
public readonly bandwidthPercentagePolicy: GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy</a>

bandwidth_percentage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#bandwidth_percentage_policy GoogleComputeInterconnect#bandwidth_percentage_policy}

---

##### `profileDescription`<sup>Optional</sup> <a name="profileDescription" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.profileDescription"></a>

```typescript
public readonly profileDescription: string;
```

- *Type:* string

A description for the AAI profile on this interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#profile_description GoogleComputeInterconnect#profile_description}

---

##### `shapeAveragePercentage`<sup>Optional</sup> <a name="shapeAveragePercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.shapeAveragePercentage"></a>

```typescript
public readonly shapeAveragePercentage: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>[]

shape_average_percentage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#shape_average_percentage GoogleComputeInterconnect#shape_average_percentage}

---

##### `strictPriorityPolicy`<sup>Optional</sup> <a name="strictPriorityPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect.property.strictPriorityPolicy"></a>

```typescript
public readonly strictPriorityPolicy: GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy</a>

strict_priority_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#strict_priority_policy GoogleComputeInterconnect#strict_priority_policy}

---

### GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy <a name="GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy: googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy.property.bandwidthPercentage">bandwidthPercentage</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>[]</code> | bandwidth_percentage block. |

---

##### `bandwidthPercentage`<sup>Optional</sup> <a name="bandwidthPercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy.property.bandwidthPercentage"></a>

```typescript
public readonly bandwidthPercentage: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>[]

bandwidth_percentage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#bandwidth_percentage GoogleComputeInterconnect#bandwidth_percentage}

---

### GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage <a name="GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage: googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage.property.percentage">percentage</a></code> | <code>number</code> | Bandwidth percentage for a specific traffic class. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage.property.trafficClass">trafficClass</a></code> | <code>string</code> | Enum representing the various traffic classes offered by AAI. |

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Bandwidth percentage for a specific traffic class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#percentage GoogleComputeInterconnect#percentage}

---

##### `trafficClass`<sup>Optional</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage.property.trafficClass"></a>

```typescript
public readonly trafficClass: string;
```

- *Type:* string

Enum representing the various traffic classes offered by AAI.

Default value: "TC_UNSPECIFIED" Possible values: ["TC_UNSPECIFIED", "TC1", "TC2", "TC3", "TC4", "TC5", "TC6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#traffic_class GoogleComputeInterconnect#traffic_class}

---

### GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage <a name="GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage: googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage.property.percentage">percentage</a></code> | <code>number</code> | Bandwidth percentage for a specific traffic class. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage.property.trafficClass">trafficClass</a></code> | <code>string</code> | Enum representing the various traffic classes offered by AAI. |

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Bandwidth percentage for a specific traffic class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#percentage GoogleComputeInterconnect#percentage}

---

##### `trafficClass`<sup>Optional</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage.property.trafficClass"></a>

```typescript
public readonly trafficClass: string;
```

- *Type:* string

Enum representing the various traffic classes offered by AAI.

Default value: "TC_UNSPECIFIED" Possible values: ["TC_UNSPECIFIED", "TC1", "TC2", "TC3", "TC4", "TC5", "TC6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#traffic_class GoogleComputeInterconnect#traffic_class}

---

### GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy <a name="GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy: googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy = { ... }
```


### GoogleComputeInterconnectCircuitInfos <a name="GoogleComputeInterconnectCircuitInfos" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectCircuitInfos: googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos = { ... }
```


### GoogleComputeInterconnectConfig <a name="GoogleComputeInterconnectConfig" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectConfig: googleComputeInterconnect.GoogleComputeInterconnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.interconnectType">interconnectType</a></code> | <code>string</code> | Type of interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.linkType">linkType</a></code> | <code>string</code> | Type of link requested. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.location">location</a></code> | <code>string</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. Specifies the location inside Google's Networks. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedLinkCount">requestedLinkCount</a></code> | <code>number</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.aaiEnabled">aaiEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable or disable the Application Aware Interconnect(AAI) feature on this interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.applicationAwareInterconnect">applicationAwareInterconnect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect">GoogleComputeInterconnectApplicationAwareInterconnect</a></code> | application_aware_interconnect block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.customerName">customerName</a></code> | <code>string</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#id GoogleComputeInterconnect#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsec">macsec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsecEnabled">macsecEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.nocContactEmail">nocContactEmail</a></code> | <code>string</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams">GoogleComputeInterconnectParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#project GoogleComputeInterconnect#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.remoteLocation">remoteLocation</a></code> | <code>string</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedFeatures">requestedFeatures</a></code> | <code>string[]</code> | List of features to request for this Interconnect connection. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `interconnectType`<sup>Required</sup> <a name="interconnectType" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.interconnectType"></a>

```typescript
public readonly interconnectType: string;
```

- *Type:* string

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:
  - PARTNER: A partner-managed interconnection shared between customers though a partner.
  - DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#interconnect_type GoogleComputeInterconnect#interconnect_type}

---

##### `linkType`<sup>Required</sup> <a name="linkType" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.linkType"></a>

```typescript
public readonly linkType: string;
```

- *Type:* string

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:
  - LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
  - LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics.
  - LINK_TYPE_ETHERNET_400G_LR4: A 400G Ethernet with LR4 optics Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR", "LINK_TYPE_ETHERNET_400G_LR4"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#link_type GoogleComputeInterconnect#link_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

URL of the InterconnectLocation object that represents where this connection is to be provisioned. Specifies the location inside Google's Networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#location GoogleComputeInterconnect#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#name GoogleComputeInterconnect#name}

---

##### `requestedLinkCount`<sup>Required</sup> <a name="requestedLinkCount" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedLinkCount"></a>

```typescript
public readonly requestedLinkCount: number;
```

- *Type:* number

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#requested_link_count GoogleComputeInterconnect#requested_link_count}

---

##### `aaiEnabled`<sup>Optional</sup> <a name="aaiEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.aaiEnabled"></a>

```typescript
public readonly aaiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable or disable the Application Aware Interconnect(AAI) feature on this interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#aai_enabled GoogleComputeInterconnect#aai_enabled}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#admin_enabled GoogleComputeInterconnect#admin_enabled}

---

##### `applicationAwareInterconnect`<sup>Optional</sup> <a name="applicationAwareInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.applicationAwareInterconnect"></a>

```typescript
public readonly applicationAwareInterconnect: GoogleComputeInterconnectApplicationAwareInterconnect;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect">GoogleComputeInterconnectApplicationAwareInterconnect</a>

application_aware_interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#application_aware_interconnect GoogleComputeInterconnect#application_aware_interconnect}

---

##### `customerName`<sup>Optional</sup> <a name="customerName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.customerName"></a>

```typescript
public readonly customerName: string;
```

- *Type:* string

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

This field is required for Dedicated and Partner Interconnect, should not be specified
for cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#customer_name GoogleComputeInterconnect#customer_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#deletion_policy GoogleComputeInterconnect#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#description GoogleComputeInterconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#id GoogleComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#labels GoogleComputeInterconnect#labels}

---

##### `macsec`<sup>Optional</sup> <a name="macsec" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsec"></a>

```typescript
public readonly macsec: GoogleComputeInterconnectMacsec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#macsec GoogleComputeInterconnect#macsec}

---

##### `macsecEnabled`<sup>Optional</sup> <a name="macsecEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsecEnabled"></a>

```typescript
public readonly macsecEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#macsec_enabled GoogleComputeInterconnect#macsec_enabled}

---

##### `nocContactEmail`<sup>Optional</sup> <a name="nocContactEmail" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.nocContactEmail"></a>

```typescript
public readonly nocContactEmail: string;
```

- *Type:* string

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#noc_contact_email GoogleComputeInterconnect#noc_contact_email}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.params"></a>

```typescript
public readonly params: GoogleComputeInterconnectParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams">GoogleComputeInterconnectParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#params GoogleComputeInterconnect#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#project GoogleComputeInterconnect#project}.

---

##### `remoteLocation`<sup>Optional</sup> <a name="remoteLocation" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.remoteLocation"></a>

```typescript
public readonly remoteLocation: string;
```

- *Type:* string

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#remote_location GoogleComputeInterconnect#remote_location}

---

##### `requestedFeatures`<sup>Optional</sup> <a name="requestedFeatures" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedFeatures"></a>

```typescript
public readonly requestedFeatures: string[];
```

- *Type:* string[]

List of features to request for this Interconnect connection.

This field is only applicable during Interconnect creation and cannot be modified later.
Possible values include:
- 'IF_MACSEC': Provisions the connection on hardware ports that support MACsec (Media Access Control Security). If not specified, the system may allocate non-MACsec capable ports if available.
- 'IF_L2_FORWARDING': Provisions the connection for Layer 2 (L2) traffic forwarding. If not specified, the connection defaults to Layer 3 (L3) traffic forwarding.
- 'IF_CROSS_SITE_NETWORK': Provisions the connection exclusively for Cross-Site Networking.
Note: 'MACSEC' is a legacy value for compatibility reasons and has the same effect as 'IF_MACSEC'. 'IF_MACSEC' is preferred. Possible values: ["MACSEC", "CROSS_SITE_NETWORK", "IF_MACSEC", "IF_L2_FORWARDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#requested_features GoogleComputeInterconnect#requested_features}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeInterconnectTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#timeouts GoogleComputeInterconnect#timeouts}

---

### GoogleComputeInterconnectExpectedOutages <a name="GoogleComputeInterconnectExpectedOutages" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectExpectedOutages: googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages = { ... }
```


### GoogleComputeInterconnectMacsec <a name="GoogleComputeInterconnectMacsec" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectMacsec: googleComputeInterconnect.GoogleComputeInterconnectMacsec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.preSharedKeys">preSharedKeys</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>[]</code> | pre_shared_keys block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |

---

##### `preSharedKeys`<sup>Required</sup> <a name="preSharedKeys" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.preSharedKeys"></a>

```typescript
public readonly preSharedKeys: IResolvable | GoogleComputeInterconnectMacsecPreSharedKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>[]

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#pre_shared_keys GoogleComputeInterconnect#pre_shared_keys}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#fail_open GoogleComputeInterconnect#fail_open}

---

### GoogleComputeInterconnectMacsecPreSharedKeys <a name="GoogleComputeInterconnectMacsecPreSharedKeys" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectMacsecPreSharedKeys: googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.name">name</a></code> | <code>string</code> | A name for this pre-shared key. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.startTime">startTime</a></code> | <code>string</code> | A RFC3339 timestamp on or after which the key is valid. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for this pre-shared key.

The name must be 1-63 characters long, and
 comply with RFC1035. Specifically, the name must be 1-63 characters long and match
 the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
 must be a lowercase letter, and all following characters must be a dash, lowercase
 letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#name GoogleComputeInterconnect#name}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#fail_open GoogleComputeInterconnect#fail_open}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

A RFC3339 timestamp on or after which the key is valid.

startTime can be in the
future. If the keychain has a single key, startTime can be omitted. If the keychain
has multiple keys, startTime is mandatory for each key. The start times of keys must
be in increasing order. The start times of two consecutive keys must be at least 6
hours apart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#start_time GoogleComputeInterconnect#start_time}

---

### GoogleComputeInterconnectParams <a name="GoogleComputeInterconnectParams" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectParams: googleComputeInterconnect.GoogleComputeInterconnectParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags to be bound to the interconnect. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags to be bound to the interconnect.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#resource_manager_tags GoogleComputeInterconnect#resource_manager_tags}

---

### GoogleComputeInterconnectTimeouts <a name="GoogleComputeInterconnectTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

const googleComputeInterconnectTimeouts: googleComputeInterconnect.GoogleComputeInterconnectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#create GoogleComputeInterconnect#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#delete GoogleComputeInterconnect#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#update GoogleComputeInterconnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#create GoogleComputeInterconnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#delete GoogleComputeInterconnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_interconnect#update GoogleComputeInterconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList <a name="GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>[]

---


### GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference <a name="GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.resetTrafficClass">resetTrafficClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentage` <a name="resetPercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```

##### `resetTrafficClass` <a name="resetTrafficClass" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.resetTrafficClass"></a>

```typescript
public resetTrafficClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.trafficClassInput">trafficClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.trafficClass">trafficClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `trafficClassInput`<sup>Optional</sup> <a name="trafficClassInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.trafficClassInput"></a>

```typescript
public readonly trafficClassInput: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `trafficClass`<sup>Required</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.trafficClass"></a>

```typescript
public readonly trafficClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>

---


### GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference <a name="GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.putBandwidthPercentage">putBandwidthPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.resetBandwidthPercentage">resetBandwidthPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidthPercentage` <a name="putBandwidthPercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.putBandwidthPercentage"></a>

```typescript
public putBandwidthPercentage(value: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.putBandwidthPercentage.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>[]

---

##### `resetBandwidthPercentage` <a name="resetBandwidthPercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.resetBandwidthPercentage"></a>

```typescript
public resetBandwidthPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.bandwidthPercentage">bandwidthPercentage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.bandwidthPercentageInput">bandwidthPercentageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthPercentage`<sup>Required</sup> <a name="bandwidthPercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.bandwidthPercentage"></a>

```typescript
public readonly bandwidthPercentage: GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentageList</a>

---

##### `bandwidthPercentageInput`<sup>Optional</sup> <a name="bandwidthPercentageInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.bandwidthPercentageInput"></a>

```typescript
public readonly bandwidthPercentageInput: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyBandwidthPercentage</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy</a>

---


### GoogleComputeInterconnectApplicationAwareInterconnectOutputReference <a name="GoogleComputeInterconnectApplicationAwareInterconnectOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putBandwidthPercentagePolicy">putBandwidthPercentagePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putShapeAveragePercentage">putShapeAveragePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putStrictPriorityPolicy">putStrictPriorityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetBandwidthPercentagePolicy">resetBandwidthPercentagePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetProfileDescription">resetProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetShapeAveragePercentage">resetShapeAveragePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetStrictPriorityPolicy">resetStrictPriorityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidthPercentagePolicy` <a name="putBandwidthPercentagePolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putBandwidthPercentagePolicy"></a>

```typescript
public putBandwidthPercentagePolicy(value: GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putBandwidthPercentagePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy</a>

---

##### `putShapeAveragePercentage` <a name="putShapeAveragePercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putShapeAveragePercentage"></a>

```typescript
public putShapeAveragePercentage(value: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putShapeAveragePercentage.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>[]

---

##### `putStrictPriorityPolicy` <a name="putStrictPriorityPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putStrictPriorityPolicy"></a>

```typescript
public putStrictPriorityPolicy(value: GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.putStrictPriorityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy</a>

---

##### `resetBandwidthPercentagePolicy` <a name="resetBandwidthPercentagePolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetBandwidthPercentagePolicy"></a>

```typescript
public resetBandwidthPercentagePolicy(): void
```

##### `resetProfileDescription` <a name="resetProfileDescription" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetProfileDescription"></a>

```typescript
public resetProfileDescription(): void
```

##### `resetShapeAveragePercentage` <a name="resetShapeAveragePercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetShapeAveragePercentage"></a>

```typescript
public resetShapeAveragePercentage(): void
```

##### `resetStrictPriorityPolicy` <a name="resetStrictPriorityPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.resetStrictPriorityPolicy"></a>

```typescript
public resetStrictPriorityPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.bandwidthPercentagePolicy">bandwidthPercentagePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.shapeAveragePercentage">shapeAveragePercentage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.strictPriorityPolicy">strictPriorityPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.bandwidthPercentagePolicyInput">bandwidthPercentagePolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.profileDescriptionInput">profileDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.shapeAveragePercentageInput">shapeAveragePercentageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.strictPriorityPolicyInput">strictPriorityPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.profileDescription">profileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect">GoogleComputeInterconnectApplicationAwareInterconnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthPercentagePolicy`<sup>Required</sup> <a name="bandwidthPercentagePolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.bandwidthPercentagePolicy"></a>

```typescript
public readonly bandwidthPercentagePolicy: GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicyOutputReference</a>

---

##### `shapeAveragePercentage`<sup>Required</sup> <a name="shapeAveragePercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.shapeAveragePercentage"></a>

```typescript
public readonly shapeAveragePercentage: GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList</a>

---

##### `strictPriorityPolicy`<sup>Required</sup> <a name="strictPriorityPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.strictPriorityPolicy"></a>

```typescript
public readonly strictPriorityPolicy: GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference</a>

---

##### `bandwidthPercentagePolicyInput`<sup>Optional</sup> <a name="bandwidthPercentagePolicyInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.bandwidthPercentagePolicyInput"></a>

```typescript
public readonly bandwidthPercentagePolicyInput: GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy">GoogleComputeInterconnectApplicationAwareInterconnectBandwidthPercentagePolicy</a>

---

##### `profileDescriptionInput`<sup>Optional</sup> <a name="profileDescriptionInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.profileDescriptionInput"></a>

```typescript
public readonly profileDescriptionInput: string;
```

- *Type:* string

---

##### `shapeAveragePercentageInput`<sup>Optional</sup> <a name="shapeAveragePercentageInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.shapeAveragePercentageInput"></a>

```typescript
public readonly shapeAveragePercentageInput: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>[]

---

##### `strictPriorityPolicyInput`<sup>Optional</sup> <a name="strictPriorityPolicyInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.strictPriorityPolicyInput"></a>

```typescript
public readonly strictPriorityPolicyInput: GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy</a>

---

##### `profileDescription`<sup>Required</sup> <a name="profileDescription" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.profileDescription"></a>

```typescript
public readonly profileDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectApplicationAwareInterconnect;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnect">GoogleComputeInterconnectApplicationAwareInterconnect</a>

---


### GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList <a name="GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>[]

---


### GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference <a name="GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.resetTrafficClass">resetTrafficClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentage` <a name="resetPercentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```

##### `resetTrafficClass` <a name="resetTrafficClass" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.resetTrafficClass"></a>

```typescript
public resetTrafficClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.trafficClassInput">trafficClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.trafficClass">trafficClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `trafficClassInput`<sup>Optional</sup> <a name="trafficClassInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.trafficClassInput"></a>

```typescript
public readonly trafficClassInput: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `trafficClass`<sup>Required</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.trafficClass"></a>

```typescript
public readonly trafficClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage">GoogleComputeInterconnectApplicationAwareInterconnectShapeAveragePercentage</a>

---


### GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference <a name="GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy">GoogleComputeInterconnectApplicationAwareInterconnectStrictPriorityPolicy</a>

---


### GoogleComputeInterconnectCircuitInfosList <a name="GoogleComputeInterconnectCircuitInfosList" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectCircuitInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectCircuitInfosOutputReference <a name="GoogleComputeInterconnectCircuitInfosOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId">customerDemarcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId">googleCircuitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId">googleDemarcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos">GoogleComputeInterconnectCircuitInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerDemarcId`<sup>Required</sup> <a name="customerDemarcId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId"></a>

```typescript
public readonly customerDemarcId: string;
```

- *Type:* string

---

##### `googleCircuitId`<sup>Required</sup> <a name="googleCircuitId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId"></a>

```typescript
public readonly googleCircuitId: string;
```

- *Type:* string

---

##### `googleDemarcId`<sup>Required</sup> <a name="googleDemarcId" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId"></a>

```typescript
public readonly googleDemarcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectCircuitInfos;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos">GoogleComputeInterconnectCircuitInfos</a>

---


### GoogleComputeInterconnectExpectedOutagesList <a name="GoogleComputeInterconnectExpectedOutagesList" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectExpectedOutagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeInterconnectExpectedOutagesOutputReference <a name="GoogleComputeInterconnectExpectedOutagesOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits">affectedCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages">GoogleComputeInterconnectExpectedOutages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `affectedCircuits`<sup>Required</sup> <a name="affectedCircuits" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits"></a>

```typescript
public readonly affectedCircuits: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectExpectedOutages;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages">GoogleComputeInterconnectExpectedOutages</a>

---


### GoogleComputeInterconnectMacsecOutputReference <a name="GoogleComputeInterconnectMacsecOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.putPreSharedKeys">putPreSharedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreSharedKeys` <a name="putPreSharedKeys" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.putPreSharedKeys"></a>

```typescript
public putPreSharedKeys(value: IResolvable | GoogleComputeInterconnectMacsecPreSharedKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.putPreSharedKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>[]

---

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeys">preSharedKeys</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList">GoogleComputeInterconnectMacsecPreSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeysInput">preSharedKeysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preSharedKeys`<sup>Required</sup> <a name="preSharedKeys" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeys"></a>

```typescript
public readonly preSharedKeys: GoogleComputeInterconnectMacsecPreSharedKeysList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList">GoogleComputeInterconnectMacsecPreSharedKeysList</a>

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preSharedKeysInput`<sup>Optional</sup> <a name="preSharedKeysInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeysInput"></a>

```typescript
public readonly preSharedKeysInput: IResolvable | GoogleComputeInterconnectMacsecPreSharedKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>[]

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectMacsec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

---


### GoogleComputeInterconnectMacsecPreSharedKeysList <a name="GoogleComputeInterconnectMacsecPreSharedKeysList" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.get"></a>

```typescript
public get(index: number): GoogleComputeInterconnectMacsecPreSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectMacsecPreSharedKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>[]

---


### GoogleComputeInterconnectMacsecPreSharedKeysOutputReference <a name="GoogleComputeInterconnectMacsecPreSharedKeysOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectMacsecPreSharedKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>

---


### GoogleComputeInterconnectParamsOutputReference <a name="GoogleComputeInterconnectParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams">GoogleComputeInterconnectParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeInterconnectParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectParams">GoogleComputeInterconnectParams</a>

---


### GoogleComputeInterconnectTimeoutsOutputReference <a name="GoogleComputeInterconnectTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeInterconnect } from '@cdktn/provider-google-beta'

new googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeInterconnectTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>

---



