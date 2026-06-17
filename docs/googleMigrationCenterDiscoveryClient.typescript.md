# `googleMigrationCenterDiscoveryClient` Submodule <a name="`googleMigrationCenterDiscoveryClient` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterDiscoveryClient <a name="GoogleMigrationCenterDiscoveryClient" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client google_migration_center_discovery_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

new googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient(scope: Construct, id: string, config: GoogleMigrationCenterDiscoveryClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig">GoogleMigrationCenterDiscoveryClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig">GoogleMigrationCenterDiscoveryClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMigrationCenterDiscoveryClientTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleMigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMigrationCenterDiscoveryClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMigrationCenterDiscoveryClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterDiscoveryClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList">GoogleMigrationCenterDiscoveryClientErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.heartbeatTime">heartbeatTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.signalsEndpoint">signalsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference">GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientIdInput">discoveryClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientId">discoveryClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.errors"></a>

```typescript
public readonly errors: GoogleMigrationCenterDiscoveryClientErrorsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList">GoogleMigrationCenterDiscoveryClientErrorsList</a>

---

##### `heartbeatTime`<sup>Required</sup> <a name="heartbeatTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.heartbeatTime"></a>

```typescript
public readonly heartbeatTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signalsEndpoint`<sup>Required</sup> <a name="signalsEndpoint" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.signalsEndpoint"></a>

```typescript
public readonly signalsEndpoint: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference">GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `discoveryClientIdInput`<sup>Optional</sup> <a name="discoveryClientIdInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientIdInput"></a>

```typescript
public readonly discoveryClientIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMigrationCenterDiscoveryClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.discoveryClientId"></a>

```typescript
public readonly discoveryClientId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterDiscoveryClientConfig <a name="GoogleMigrationCenterDiscoveryClientConfig" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

const googleMigrationCenterDiscoveryClientConfig: googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.discoveryClientId">discoveryClientId</a></code> | <code>string</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.source">source</a></code> | <code>string</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.description">description</a></code> | <code>string</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.displayName">displayName</a></code> | <code>string</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.expireTime">expireTime</a></code> | <code>string</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.ttl">ttl</a></code> | <code>string</code> | Input only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.discoveryClientId"></a>

```typescript
public readonly discoveryClientId: string;
```

- *Type:* string

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z]([a-z0-9-]{0,61}[a-z0-9])?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#discovery_client_id GoogleMigrationCenterDiscoveryClient#discovery_client_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#location GoogleMigrationCenterDiscoveryClient#location}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#service_account GoogleMigrationCenterDiscoveryClient#service_account}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#source GoogleMigrationCenterDiscoveryClient#source}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#deletion_policy GoogleMigrationCenterDiscoveryClient#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#description GoogleMigrationCenterDiscoveryClient#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#display_name GoogleMigrationCenterDiscoveryClient#display_name}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#expire_time GoogleMigrationCenterDiscoveryClient#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#id GoogleMigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#labels GoogleMigrationCenterDiscoveryClient#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#project GoogleMigrationCenterDiscoveryClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMigrationCenterDiscoveryClientTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#timeouts GoogleMigrationCenterDiscoveryClient#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#ttl GoogleMigrationCenterDiscoveryClient#ttl}

---

### GoogleMigrationCenterDiscoveryClientErrors <a name="GoogleMigrationCenterDiscoveryClientErrors" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

const googleMigrationCenterDiscoveryClientErrors: googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors = { ... }
```


### GoogleMigrationCenterDiscoveryClientErrorsDetails <a name="GoogleMigrationCenterDiscoveryClientErrorsDetails" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

const googleMigrationCenterDiscoveryClientErrorsDetails: googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails = { ... }
```


### GoogleMigrationCenterDiscoveryClientTimeouts <a name="GoogleMigrationCenterDiscoveryClientTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

const googleMigrationCenterDiscoveryClientTimeouts: googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#create GoogleMigrationCenterDiscoveryClient#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#delete GoogleMigrationCenterDiscoveryClient#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#update GoogleMigrationCenterDiscoveryClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#create GoogleMigrationCenterDiscoveryClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#delete GoogleMigrationCenterDiscoveryClient#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_migration_center_discovery_client#update GoogleMigrationCenterDiscoveryClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterDiscoveryClientErrorsDetailsList <a name="GoogleMigrationCenterDiscoveryClientErrorsDetailsList" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

new googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get"></a>

```typescript
public get(index: number): GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference <a name="GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

new googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails">GoogleMigrationCenterDiscoveryClientErrorsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMigrationCenterDiscoveryClientErrorsDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetails">GoogleMigrationCenterDiscoveryClientErrorsDetails</a>

---


### GoogleMigrationCenterDiscoveryClientErrorsList <a name="GoogleMigrationCenterDiscoveryClientErrorsList" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

new googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get"></a>

```typescript
public get(index: number): GoogleMigrationCenterDiscoveryClientErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMigrationCenterDiscoveryClientErrorsOutputReference <a name="GoogleMigrationCenterDiscoveryClientErrorsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

new googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList">GoogleMigrationCenterDiscoveryClientErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors">GoogleMigrationCenterDiscoveryClientErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.details"></a>

```typescript
public readonly details: GoogleMigrationCenterDiscoveryClientErrorsDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsDetailsList">GoogleMigrationCenterDiscoveryClientErrorsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMigrationCenterDiscoveryClientErrors;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientErrors">GoogleMigrationCenterDiscoveryClientErrors</a>

---


### GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference <a name="GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMigrationCenterDiscoveryClient } from '@cdktn/provider-google-beta'

new googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMigrationCenterDiscoveryClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterDiscoveryClient.GoogleMigrationCenterDiscoveryClientTimeouts">GoogleMigrationCenterDiscoveryClientTimeouts</a>

---



