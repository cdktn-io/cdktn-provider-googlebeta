# `googleOracleDatabaseExascaleDbStorageVault` Submodule <a name="`googleOracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseExascaleDbStorageVault <a name="GoogleOracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

new googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault(scope: Construct, id: string, config: GoogleOracleDatabaseExascaleDbStorageVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig">GoogleOracleDatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig">GoogleOracleDatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties"></a>

```typescript
public putProperties(value: GoogleOracleDatabaseExascaleDbStorageVaultProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOracleDatabaseExascaleDbStorageVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone"></a>

```typescript
public resetGcpOracleZone(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties"></a>

```typescript
public readonly properties: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```typescript
public readonly exascaleDbStorageVaultIdInput: string;
```

- *Type:* string

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput"></a>

```typescript
public readonly gcpOracleZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: GoogleOracleDatabaseExascaleDbStorageVaultProperties;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleOracleDatabaseExascaleDbStorageVaultTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultConfig <a name="GoogleOracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

const googleOracleDatabaseExascaleDbStorageVaultConfig: googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#display_name GoogleOracleDatabaseExascaleDbStorageVault#display_name}

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#location GoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties"></a>

```typescript
public readonly properties: GoogleOracleDatabaseExascaleDbStorageVaultProperties;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#properties GoogleOracleDatabaseExascaleDbStorageVault#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_policy GoogleOracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_protection GoogleOracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#gcp_oracle_zone GoogleOracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#labels GoogleOracleDatabaseExascaleDbStorageVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseExascaleDbStorageVaultTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#timeouts GoogleOracleDatabaseExascaleDbStorageVault#timeouts}

---

### GoogleOracleDatabaseExascaleDbStorageVaultProperties <a name="GoogleOracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

const googleOracleDatabaseExascaleDbStorageVaultProperties: googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | exascale_db_storage_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>number</code> | The size of additional flash cache in percentage of high capacity database storage. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | time_zone block. |

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails"></a>

```typescript
public readonly exascaleDbStorageDetails: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

exascale_db_storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_details GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}

---

##### `additionalFlashCachePercent`<sup>Optional</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent"></a>

```typescript
public readonly additionalFlashCachePercent: number;
```

- *Type:* number

The size of additional flash cache in percentage of high capacity database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#additional_flash_cache_percent GoogleOracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone"></a>

```typescript
public readonly timeZone: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#time_zone GoogleOracleDatabaseExascaleDbStorageVault#time_zone}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

const googleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails: googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs">totalSizeGbs</a></code> | <code>number</code> | The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). |

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs"></a>

```typescript
public readonly totalSizeGbs: number;
```

- *Type:* number

The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#total_size_gbs GoogleOracleDatabaseExascaleDbStorageVault#total_size_gbs}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

const googleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone: googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id">id</a></code> | <code>string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version">version</a></code> | <code>string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#version GoogleOracleDatabaseExascaleDbStorageVault#version}

---

### GoogleOracleDatabaseExascaleDbStorageVaultTimeouts <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

const googleOracleDatabaseExascaleDbStorageVaultTimeouts: googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

new googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">availableSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput">totalSizeGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">totalSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableSizeGbs`<sup>Required</sup> <a name="availableSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```typescript
public readonly availableSizeGbs: number;
```

- *Type:* number

---

##### `totalSizeGbsInput`<sup>Optional</sup> <a name="totalSizeGbsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput"></a>

```typescript
public readonly totalSizeGbsInput: number;
```

- *Type:* number

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```typescript
public readonly totalSizeGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

new googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails">putExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent">resetAdditionalFlashCachePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExascaleDbStorageDetails` <a name="putExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails"></a>

```typescript
public putExascaleDbStorageDetails(value: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone"></a>

```typescript
public putTimeZone(value: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `resetAdditionalFlashCachePercent` <a name="resetAdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent"></a>

```typescript
public resetAdditionalFlashCachePercent(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">attachedShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">availableShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">ociUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">vmClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput">additionalFlashCachePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput">exascaleDbStorageDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachedShapeAttributes`<sup>Required</sup> <a name="attachedShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```typescript
public readonly attachedShapeAttributes: string[];
```

- *Type:* string[]

---

##### `availableShapeAttributes`<sup>Required</sup> <a name="availableShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```typescript
public readonly availableShapeAttributes: string[];
```

- *Type:* string[]

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```typescript
public readonly exascaleDbStorageDetails: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUri`<sup>Required</sup> <a name="ociUri" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```typescript
public readonly ociUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a>

---

##### `vmClusterCount`<sup>Required</sup> <a name="vmClusterCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```typescript
public readonly vmClusterCount: number;
```

- *Type:* number

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```typescript
public readonly vmClusterIds: string[];
```

- *Type:* string[]

---

##### `additionalFlashCachePercentInput`<sup>Optional</sup> <a name="additionalFlashCachePercentInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput"></a>

```typescript
public readonly additionalFlashCachePercentInput: number;
```

- *Type:* number

---

##### `exascaleDbStorageDetailsInput`<sup>Optional</sup> <a name="exascaleDbStorageDetailsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput"></a>

```typescript
public readonly exascaleDbStorageDetailsInput: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `additionalFlashCachePercent`<sup>Required</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```typescript
public readonly additionalFlashCachePercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseExascaleDbStorageVaultProperties;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

new googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google-beta'

new googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseExascaleDbStorageVaultTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---



