# `googleMigrationCenterSource` Submodule <a name="`googleMigrationCenterSource` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterSource <a name="GoogleMigrationCenterSource" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source google_migration_center_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.Initializer"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

new googleMigrationCenterSource.GoogleMigrationCenterSource(scope: Construct, id: string, config: GoogleMigrationCenterSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig">GoogleMigrationCenterSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig">GoogleMigrationCenterSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMigrationCenterSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts">GoogleMigrationCenterSourceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManaged` <a name="resetManaged" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetManaged"></a>

```typescript
public resetManaged(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isConstruct"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

googleMigrationCenterSource.GoogleMigrationCenterSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformElement"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformResource"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.generateConfigForImport"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

googleMigrationCenterSource.GoogleMigrationCenterSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleMigrationCenterSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMigrationCenterSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMigrationCenterSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.errorFrameCount">errorFrameCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.pendingFrameCount">pendingFrameCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference">GoogleMigrationCenterSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.managedInput">managedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts">GoogleMigrationCenterSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.managed">managed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `errorFrameCount`<sup>Required</sup> <a name="errorFrameCount" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.errorFrameCount"></a>

```typescript
public readonly errorFrameCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pendingFrameCount`<sup>Required</sup> <a name="pendingFrameCount" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.pendingFrameCount"></a>

```typescript
public readonly pendingFrameCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMigrationCenterSourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference">GoogleMigrationCenterSourceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMigrationCenterSourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts">GoogleMigrationCenterSourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterSourceConfig <a name="GoogleMigrationCenterSourceConfig" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.Initializer"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

const googleMigrationCenterSourceConfig: googleMigrationCenterSource.GoogleMigrationCenterSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.sourceId">sourceId</a></code> | <code>string</code> | User specified ID for the source. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.description">description</a></code> | <code>string</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.displayName">displayName</a></code> | <code>string</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#id GoogleMigrationCenterSource#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.managed">managed</a></code> | <code>boolean \| cdktn.IResolvable</code> | If 'true', the source is managed by other service(s). |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.priority">priority</a></code> | <code>number</code> | The information confidence of the source. The higher the value, the higher the confidence. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#project GoogleMigrationCenterSource#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts">GoogleMigrationCenterSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.type">type</a></code> | <code>string</code> | Data source type. Possible values: SOURCE_TYPE_UNKNOWN SOURCE_TYPE_UPLOAD SOURCE_TYPE_GUEST_OS_SCAN SOURCE_TYPE_INVENTORY_SCAN SOURCE_TYPE_CUSTOM SOURCE_TYPE_DISCOVERY_CLIENT. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#location GoogleMigrationCenterSource#location}

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

User specified ID for the source.

It will become the last component of the
source name. The ID must be unique within the project, must conform with
RFC-1034, is restricted to lower-cased letters, and has a maximum
length of 63 characters. The ID must match the
regular expression: '[a-z]([a-z0-9-]{0,61}[a-z0-9])?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#source_id GoogleMigrationCenterSource#source_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#deletion_policy GoogleMigrationCenterSource#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#description GoogleMigrationCenterSource#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#display_name GoogleMigrationCenterSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#id GoogleMigrationCenterSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If 'true', the source is managed by other service(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#managed GoogleMigrationCenterSource#managed}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The information confidence of the source. The higher the value, the higher the confidence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#priority GoogleMigrationCenterSource#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#project GoogleMigrationCenterSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMigrationCenterSourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts">GoogleMigrationCenterSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#timeouts GoogleMigrationCenterSource#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Data source type. Possible values: SOURCE_TYPE_UNKNOWN SOURCE_TYPE_UPLOAD SOURCE_TYPE_GUEST_OS_SCAN SOURCE_TYPE_INVENTORY_SCAN SOURCE_TYPE_CUSTOM SOURCE_TYPE_DISCOVERY_CLIENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#type GoogleMigrationCenterSource#type}

---

### GoogleMigrationCenterSourceTimeouts <a name="GoogleMigrationCenterSourceTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts.Initializer"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

const googleMigrationCenterSourceTimeouts: googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#create GoogleMigrationCenterSource#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#delete GoogleMigrationCenterSource#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#update GoogleMigrationCenterSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#create GoogleMigrationCenterSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#delete GoogleMigrationCenterSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_source#update GoogleMigrationCenterSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterSourceTimeoutsOutputReference <a name="GoogleMigrationCenterSourceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMigrationCenterSource } from '@cdktn/provider-google-beta'

new googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts">GoogleMigrationCenterSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMigrationCenterSourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMigrationCenterSource.GoogleMigrationCenterSourceTimeouts">GoogleMigrationCenterSourceTimeouts</a>

---



