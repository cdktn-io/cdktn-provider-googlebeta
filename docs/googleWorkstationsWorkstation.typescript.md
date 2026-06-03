# `googleWorkstationsWorkstation` Submodule <a name="`googleWorkstationsWorkstation` Submodule" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkstationsWorkstation <a name="GoogleWorkstationsWorkstation" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation google_workstations_workstation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.Initializer"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstation.GoogleWorkstationsWorkstation(scope: Construct, id: string, config: GoogleWorkstationsWorkstationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig">GoogleWorkstationsWorkstationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig">GoogleWorkstationsWorkstationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetSourceWorkstation">resetSourceWorkstation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleWorkstationsWorkstationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts">GoogleWorkstationsWorkstationTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSourceWorkstation` <a name="resetSourceWorkstation" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetSourceWorkstation"></a>

```typescript
public resetSourceWorkstation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleWorkstationsWorkstation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isConstruct"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformElement"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformResource"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.generateConfigForImport"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleWorkstationsWorkstation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleWorkstationsWorkstation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleWorkstationsWorkstation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleWorkstationsWorkstation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference">GoogleWorkstationsWorkstationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.envInput">envInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.sourceWorkstationInput">sourceWorkstationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts">GoogleWorkstationsWorkstationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationClusterIdInput">workstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationConfigIdInput">workstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationIdInput">workstationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.sourceWorkstation">sourceWorkstation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationConfigId">workstationConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationId">workstationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkstationsWorkstationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference">GoogleWorkstationsWorkstationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.envInput"></a>

```typescript
public readonly envInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sourceWorkstationInput`<sup>Optional</sup> <a name="sourceWorkstationInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.sourceWorkstationInput"></a>

```typescript
public readonly sourceWorkstationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleWorkstationsWorkstationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts">GoogleWorkstationsWorkstationTimeouts</a>

---

##### `workstationClusterIdInput`<sup>Optional</sup> <a name="workstationClusterIdInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationClusterIdInput"></a>

```typescript
public readonly workstationClusterIdInput: string;
```

- *Type:* string

---

##### `workstationConfigIdInput`<sup>Optional</sup> <a name="workstationConfigIdInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationConfigIdInput"></a>

```typescript
public readonly workstationConfigIdInput: string;
```

- *Type:* string

---

##### `workstationIdInput`<sup>Optional</sup> <a name="workstationIdInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationIdInput"></a>

```typescript
public readonly workstationIdInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sourceWorkstation`<sup>Required</sup> <a name="sourceWorkstation" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.sourceWorkstation"></a>

```typescript
public readonly sourceWorkstation: string;
```

- *Type:* string

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationConfigId"></a>

```typescript
public readonly workstationConfigId: string;
```

- *Type:* string

---

##### `workstationId`<sup>Required</sup> <a name="workstationId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.workstationId"></a>

```typescript
public readonly workstationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkstationsWorkstationConfig <a name="GoogleWorkstationsWorkstationConfig" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.Initializer"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

const googleWorkstationsWorkstationConfig: googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.location">location</a></code> | <code>string</code> | The location where the workstation parent resources reside. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.workstationConfigId">workstationConfigId</a></code> | <code>string</code> | The ID of the parent workstation cluster config. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.workstationId">workstationId</a></code> | <code>string</code> | ID to use for the workstation. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | 'Client-specified environment variables passed to the workstation container's entrypoint.'. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#id GoogleWorkstationsWorkstation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#project GoogleWorkstationsWorkstation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.sourceWorkstation">sourceWorkstation</a></code> | <code>string</code> | Full resource name of the source workstation from which the workstation's persistent directories will be cloned from during creation. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts">GoogleWorkstationsWorkstationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the workstation parent resources reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#location GoogleWorkstationsWorkstation#location}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#workstation_cluster_id GoogleWorkstationsWorkstation#workstation_cluster_id}

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.workstationConfigId"></a>

```typescript
public readonly workstationConfigId: string;
```

- *Type:* string

The ID of the parent workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#workstation_config_id GoogleWorkstationsWorkstation#workstation_config_id}

---

##### `workstationId`<sup>Required</sup> <a name="workstationId" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.workstationId"></a>

```typescript
public readonly workstationId: string;
```

- *Type:* string

ID to use for the workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#workstation_id GoogleWorkstationsWorkstation#workstation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#annotations GoogleWorkstationsWorkstation#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#deletion_policy GoogleWorkstationsWorkstation#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#display_name GoogleWorkstationsWorkstation#display_name}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

'Client-specified environment variables passed to the workstation container's entrypoint.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#env GoogleWorkstationsWorkstation#env}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#id GoogleWorkstationsWorkstation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#labels GoogleWorkstationsWorkstation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#project GoogleWorkstationsWorkstation#project}.

---

##### `sourceWorkstation`<sup>Optional</sup> <a name="sourceWorkstation" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.sourceWorkstation"></a>

```typescript
public readonly sourceWorkstation: string;
```

- *Type:* string

Full resource name of the source workstation from which the workstation's persistent directories will be cloned from during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#source_workstation GoogleWorkstationsWorkstation#source_workstation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkstationsWorkstationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts">GoogleWorkstationsWorkstationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#timeouts GoogleWorkstationsWorkstation#timeouts}

---

### GoogleWorkstationsWorkstationTimeouts <a name="GoogleWorkstationsWorkstationTimeouts" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts.Initializer"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

const googleWorkstationsWorkstationTimeouts: googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#create GoogleWorkstationsWorkstation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#delete GoogleWorkstationsWorkstation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#update GoogleWorkstationsWorkstation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#create GoogleWorkstationsWorkstation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#delete GoogleWorkstationsWorkstation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_workstations_workstation#update GoogleWorkstationsWorkstation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkstationsWorkstationTimeoutsOutputReference <a name="GoogleWorkstationsWorkstationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstation } from '@cdktn/provider-google-beta'

new googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts">GoogleWorkstationsWorkstationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkstationsWorkstationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleWorkstationsWorkstation.GoogleWorkstationsWorkstationTimeouts">GoogleWorkstationsWorkstationTimeouts</a>

---



