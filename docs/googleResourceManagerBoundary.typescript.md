# `googleResourceManagerBoundary` Submodule <a name="`googleResourceManagerBoundary` Submodule" id="@cdktn/provider-google-beta.googleResourceManagerBoundary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerBoundary <a name="GoogleResourceManagerBoundary" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary google_resource_manager_boundary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

new googleResourceManagerBoundary.GoogleResourceManagerBoundary(scope: Construct, id: string, config: GoogleResourceManagerBoundaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig">GoogleResourceManagerBoundaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig">GoogleResourceManagerBoundaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter">putResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetResourceFilter">resetResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceFilter` <a name="putResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter"></a>

```typescript
public putResourceFilter(value: GoogleResourceManagerBoundaryResourceFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleResourceManagerBoundaryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceFilter` <a name="resetResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetResourceFilter"></a>

```typescript
public resetResourceFilter(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleResourceManagerBoundary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleResourceManagerBoundary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleResourceManagerBoundary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleResourceManagerBoundary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerBoundary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.managementProject">managementProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference">GoogleResourceManagerBoundaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryIdInput">boundaryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilterInput">resourceFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryId">boundaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `managementProject`<sup>Required</sup> <a name="managementProject" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.managementProject"></a>

```typescript
public readonly managementProject: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceFilter`<sup>Required</sup> <a name="resourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilter"></a>

```typescript
public readonly resourceFilter: GoogleResourceManagerBoundaryResourceFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleResourceManagerBoundaryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference">GoogleResourceManagerBoundaryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `boundaryIdInput`<sup>Optional</sup> <a name="boundaryIdInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryIdInput"></a>

```typescript
public readonly boundaryIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `resourceFilterInput`<sup>Optional</sup> <a name="resourceFilterInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilterInput"></a>

```typescript
public readonly resourceFilterInput: GoogleResourceManagerBoundaryResourceFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleResourceManagerBoundaryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryId"></a>

```typescript
public readonly boundaryId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerBoundaryConfig <a name="GoogleResourceManagerBoundaryConfig" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

const googleResourceManagerBoundaryConfig: googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.boundaryId">boundaryId</a></code> | <code>string</code> | The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.parent">parent</a></code> | <code>string</code> | The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable display name of the Boundary. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | resource_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.boundaryId"></a>

```typescript
public readonly boundaryId: string;
```

- *Type:* string

The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name.

Must be unique within the parent.
Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
with a letter, and may not end with a hyphen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#boundary_id GoogleResourceManagerBoundary#boundary_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#parent GoogleResourceManagerBoundary#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#deletion_policy GoogleResourceManagerBoundary#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable display name of the Boundary.

When present it must be
between 4 and 30 characters. Allowed characters are lowercase and
uppercase letters, numbers, hyphen, single-quote, double-quote, space,
and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#display_name GoogleResourceManagerBoundary#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilter`<sup>Optional</sup> <a name="resourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.resourceFilter"></a>

```typescript
public readonly resourceFilter: GoogleResourceManagerBoundaryResourceFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#resource_filter GoogleResourceManagerBoundary#resource_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleResourceManagerBoundaryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#timeouts GoogleResourceManagerBoundary#timeouts}

---

### GoogleResourceManagerBoundaryResourceFilter <a name="GoogleResourceManagerBoundaryResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

const googleResourceManagerBoundaryResourceFilter: googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | tag_filter block. |

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.property.tagFilter"></a>

```typescript
public readonly tagFilter: GoogleResourceManagerBoundaryResourceFilterTagFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_filter GoogleResourceManagerBoundary#tag_filter}

---

### GoogleResourceManagerBoundaryResourceFilterTagFilter <a name="GoogleResourceManagerBoundaryResourceFilterTagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

const googleResourceManagerBoundaryResourceFilterTagFilter: googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagKey">tagKey</a></code> | <code>string</code> | The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagValue">tagValue</a></code> | <code>string</code> | The allowed short name of the tag value, for example 'production'. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_key GoogleResourceManagerBoundary#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

The allowed short name of the tag value, for example 'production'.

A project matches this tag filter if its effective tag value for
the given 'tagKey' matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_value GoogleResourceManagerBoundary#tag_value}

---

### GoogleResourceManagerBoundaryTimeouts <a name="GoogleResourceManagerBoundaryTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

const googleResourceManagerBoundaryTimeouts: googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#create GoogleResourceManagerBoundary#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#delete GoogleResourceManagerBoundary#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#update GoogleResourceManagerBoundary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#create GoogleResourceManagerBoundary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#delete GoogleResourceManagerBoundary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#update GoogleResourceManagerBoundary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerBoundaryResourceFilterOutputReference <a name="GoogleResourceManagerBoundaryResourceFilterOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

new googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter">putTagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilter` <a name="putTagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter"></a>

```typescript
public putTagFilter(value: GoogleResourceManagerBoundaryResourceFilterTagFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter"></a>

```typescript
public readonly tagFilter: GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference</a>

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput"></a>

```typescript
public readonly tagFilterInput: GoogleResourceManagerBoundaryResourceFilterTagFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleResourceManagerBoundaryResourceFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---


### GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference <a name="GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

new googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleResourceManagerBoundaryResourceFilterTagFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---


### GoogleResourceManagerBoundaryTimeoutsOutputReference <a name="GoogleResourceManagerBoundaryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleResourceManagerBoundary } from '@cdktn/provider-google-beta'

new googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleResourceManagerBoundaryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---



