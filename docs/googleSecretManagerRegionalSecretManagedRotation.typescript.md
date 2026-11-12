# `googleSecretManagerRegionalSecretManagedRotation` Submodule <a name="`googleSecretManagerRegionalSecretManagedRotation` Submodule" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecretManagedRotation <a name="GoogleSecretManagerRegionalSecretManagedRotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation(scope: Construct, id: string, config: GoogleSecretManagerRegionalSecretManagedRotationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig">GoogleSecretManagerRegionalSecretManagedRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig">GoogleSecretManagerRegionalSecretManagedRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials">putCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudSqlSingleUserCredentials` <a name="putCloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials"></a>

```typescript
public putCloudSqlSingleUserCredentials(value: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSecretManagerRegionalSecretManagedRotationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecretManagerRegionalSecretManagedRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecretManagerRegionalSecretManagedRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecretManagedRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList">GoogleSecretManagerRegionalSecretManagedRotationRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput">cloudSqlSingleUserCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials"></a>

```typescript
public readonly cloudSqlSingleUserCredentials: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.rotation"></a>

```typescript
public readonly rotation: GoogleSecretManagerRegionalSecretManagedRotationRotationList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList">GoogleSecretManagerRegionalSecretManagedRotationRotationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a>

---

##### `cloudSqlSingleUserCredentialsInput`<sup>Optional</sup> <a name="cloudSqlSingleUserCredentialsInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput"></a>

```typescript
public readonly cloudSqlSingleUserCredentialsInput: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSecretManagerRegionalSecretManagedRotationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials <a name="GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials: googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId">instanceId</a></code> | <code>string</code> | The name of the Cloud SQL instance. The instance must be in the same project as the regional secret. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username">username</a></code> | <code>string</code> | The username of the Cloud SQL database user. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password">password</a></code> | <code>string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo">passwordWo</a></code> | <code>string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | Triggers update of 'password_wo' write-only. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#instance_id GoogleSecretManagerRegionalSecretManagedRotation#instance_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#username GoogleSecretManagerRegionalSecretManagedRotation#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password GoogleSecretManagerRegionalSecretManagedRotation#password}

---

##### `passwordWo`<sup>Optional</sup> <a name="passwordWo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo GoogleSecretManagerRegionalSecretManagedRotation#password_wo}

---

##### `passwordWoVersion`<sup>Optional</sup> <a name="passwordWoVersion" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo_version GoogleSecretManagerRegionalSecretManagedRotation#password_wo_version}

---

### GoogleSecretManagerRegionalSecretManagedRotationConfig <a name="GoogleSecretManagerRegionalSecretManagedRotationConfig" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretManagedRotationConfig: googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.location">location</a></code> | <code>string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.secretId">secretId</a></code> | <code>string</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials"></a>

```typescript
public readonly cloudSqlSingleUserCredentials: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials GoogleSecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#location GoogleSecretManagerRegionalSecretManagedRotation#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#secret_id GoogleSecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSecretManagerRegionalSecretManagedRotationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#timeouts GoogleSecretManagerRegionalSecretManagedRotation#timeouts}

---

### GoogleSecretManagerRegionalSecretManagedRotationRotation <a name="GoogleSecretManagerRegionalSecretManagedRotationRotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretManagedRotationRotation: googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation = { ... }
```


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus: googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus = { ... }
```


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError: googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError = { ... }
```


### GoogleSecretManagerRegionalSecretManagedRotationTimeouts <a name="GoogleSecretManagerRegionalSecretManagedRotationTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

const googleSecretManagerRegionalSecretManagedRotationTimeouts: googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#create GoogleSecretManagerRegionalSecretManagedRotation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#delete GoogleSecretManagerRegionalSecretManagedRotation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#create GoogleSecretManagerRegionalSecretManagedRotation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#delete GoogleSecretManagerRegionalSecretManagedRotation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo">resetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion">resetPasswordWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordWo` <a name="resetPasswordWo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo"></a>

```typescript
public resetPasswordWo(): void
```

##### `resetPasswordWoVersion` <a name="resetPasswordWoVersion" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion"></a>

```typescript
public resetPasswordWoVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput">passwordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo">passwordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput"></a>

```typescript
public readonly passwordWoInput: string;
```

- *Type:* string

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput"></a>

```typescript
public readonly passwordWoVersionInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### ~~`passwordWo`~~<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly passwordWo: string;
```

- *Type:* string

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get"></a>

```typescript
public get(index: number): GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get"></a>

```typescript
public get(index: number): GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get"></a>

```typescript
public get(index: number): GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error"></a>

```typescript
public readonly error: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus">managedRotationStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation">GoogleSecretManagerRegionalSecretManagedRotationRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedRotationStatus`<sup>Required</sup> <a name="managedRotationStatus" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus"></a>

```typescript
public readonly managedRotationStatus: GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSecretManagerRegionalSecretManagedRotationRotation;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation">GoogleSecretManagerRegionalSecretManagedRotationRotation</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSecretManagerRegionalSecretManagedRotation } from '@cdktn/provider-google-beta'

new googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSecretManagerRegionalSecretManagedRotationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---



