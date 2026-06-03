# `googleApihubCuration` Submodule <a name="`googleApihubCuration` Submodule" id="@cdktn/provider-google-beta.googleApihubCuration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubCuration <a name="GoogleApihubCuration" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation google_apihub_curation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

new googleApihubCuration.GoogleApihubCuration(scope: Construct, id: string, config: GoogleApihubCurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig">GoogleApihubCurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig">GoogleApihubCurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putEndpoint"></a>

```typescript
public putEndpoint(value: GoogleApihubCurationEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApihubCurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApihubCuration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isConstruct"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

googleApihubCuration.GoogleApihubCuration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformElement"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

googleApihubCuration.GoogleApihubCuration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformResource"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

googleApihubCuration.GoogleApihubCuration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

googleApihubCuration.GoogleApihubCuration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleApihubCuration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApihubCuration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApihubCuration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApihubCuration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference">GoogleApihubCurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorCode">lastExecutionErrorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorMessage">lastExecutionErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionState">lastExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.pluginInstanceActions">pluginInstanceActions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList">GoogleApihubCurationPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference">GoogleApihubCurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationIdInput">curationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationId">curationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpoint"></a>

```typescript
public readonly endpoint: GoogleApihubCurationEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference">GoogleApihubCurationEndpointOutputReference</a>

---

##### `lastExecutionErrorCode`<sup>Required</sup> <a name="lastExecutionErrorCode" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorCode"></a>

```typescript
public readonly lastExecutionErrorCode: string;
```

- *Type:* string

---

##### `lastExecutionErrorMessage`<sup>Required</sup> <a name="lastExecutionErrorMessage" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorMessage"></a>

```typescript
public readonly lastExecutionErrorMessage: string;
```

- *Type:* string

---

##### `lastExecutionState`<sup>Required</sup> <a name="lastExecutionState" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionState"></a>

```typescript
public readonly lastExecutionState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pluginInstanceActions`<sup>Required</sup> <a name="pluginInstanceActions" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.pluginInstanceActions"></a>

```typescript
public readonly pluginInstanceActions: GoogleApihubCurationPluginInstanceActionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList">GoogleApihubCurationPluginInstanceActionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApihubCurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference">GoogleApihubCurationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `curationIdInput`<sup>Optional</sup> <a name="curationIdInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationIdInput"></a>

```typescript
public readonly curationIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpointInput"></a>

```typescript
public readonly endpointInput: GoogleApihubCurationEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApihubCurationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>

---

##### `curationId`<sup>Required</sup> <a name="curationId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationId"></a>

```typescript
public readonly curationId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubCurationConfig <a name="GoogleApihubCurationConfig" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

const googleApihubCurationConfig: googleApihubCuration.GoogleApihubCurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.curationId">curationId</a></code> | <code>string</code> | The ID to use for the curation resource, which will become the final component of the curations's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the curation. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.description">description</a></code> | <code>string</code> | The description of the curation. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#id GoogleApihubCuration#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#project GoogleApihubCuration#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `curationId`<sup>Required</sup> <a name="curationId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.curationId"></a>

```typescript
public readonly curationId: string;
```

- *Type:* string

The ID to use for the curation resource, which will become the final component of the curations's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
the specified ID is already used by another curation resource in the API
hub.
* If not provided, a system generated ID will be used.

This value should be 4-500 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#curation_id GoogleApihubCuration#curation_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#display_name GoogleApihubCuration#display_name}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.endpoint"></a>

```typescript
public readonly endpoint: GoogleApihubCurationEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#endpoint GoogleApihubCuration#endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#location GoogleApihubCuration#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#deletion_policy GoogleApihubCuration#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#description GoogleApihubCuration#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#id GoogleApihubCuration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#project GoogleApihubCuration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApihubCurationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#timeouts GoogleApihubCuration#timeouts}

---

### GoogleApihubCurationEndpoint <a name="GoogleApihubCurationEndpoint" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

const googleApihubCurationEndpoint: googleApihubCuration.GoogleApihubCurationEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint.property.applicationIntegrationEndpointDetails">applicationIntegrationEndpointDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | application_integration_endpoint_details block. |

---

##### `applicationIntegrationEndpointDetails`<sup>Required</sup> <a name="applicationIntegrationEndpointDetails" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint.property.applicationIntegrationEndpointDetails"></a>

```typescript
public readonly applicationIntegrationEndpointDetails: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

application_integration_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#application_integration_endpoint_details GoogleApihubCuration#application_integration_endpoint_details}

---

### GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails <a name="GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

const googleApihubCurationEndpointApplicationIntegrationEndpointDetails: googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId">triggerId</a></code> | <code>string</code> | The API trigger ID of the Application Integration workflow. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri">uri</a></code> | <code>string</code> | The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'. |

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

The API trigger ID of the Application Integration workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#trigger_id GoogleApihubCuration#trigger_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#uri GoogleApihubCuration#uri}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubCurationPluginInstanceActions <a name="GoogleApihubCurationPluginInstanceActions" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

const googleApihubCurationPluginInstanceActions: googleApihubCuration.GoogleApihubCurationPluginInstanceActions = { ... }
```


### GoogleApihubCurationTimeouts <a name="GoogleApihubCurationTimeouts" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

const googleApihubCurationTimeouts: googleApihubCuration.GoogleApihubCurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#create GoogleApihubCuration#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#delete GoogleApihubCuration#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#update GoogleApihubCuration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#create GoogleApihubCuration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#delete GoogleApihubCuration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apihub_curation#update GoogleApihubCuration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference <a name="GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

new googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput">triggerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `triggerIdInput`<sup>Optional</sup> <a name="triggerIdInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput"></a>

```typescript
public readonly triggerIdInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---


### GoogleApihubCurationEndpointOutputReference <a name="GoogleApihubCurationEndpointOutputReference" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

new googleApihubCuration.GoogleApihubCurationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails">putApplicationIntegrationEndpointDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationIntegrationEndpointDetails` <a name="putApplicationIntegrationEndpointDetails" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails"></a>

```typescript
public putApplicationIntegrationEndpointDetails(value: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails">applicationIntegrationEndpointDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput">applicationIntegrationEndpointDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationIntegrationEndpointDetails`<sup>Required</sup> <a name="applicationIntegrationEndpointDetails" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails"></a>

```typescript
public readonly applicationIntegrationEndpointDetails: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a>

---

##### `applicationIntegrationEndpointDetailsInput`<sup>Optional</sup> <a name="applicationIntegrationEndpointDetailsInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput"></a>

```typescript
public readonly applicationIntegrationEndpointDetailsInput: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubCurationEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

---


### GoogleApihubCurationPluginInstanceActionsList <a name="GoogleApihubCurationPluginInstanceActionsList" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

new googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.get"></a>

```typescript
public get(index: number): GoogleApihubCurationPluginInstanceActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleApihubCurationPluginInstanceActionsOutputReference <a name="GoogleApihubCurationPluginInstanceActionsOutputReference" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

new googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance">pluginInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions">GoogleApihubCurationPluginInstanceActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance"></a>

```typescript
public readonly pluginInstance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApihubCurationPluginInstanceActions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions">GoogleApihubCurationPluginInstanceActions</a>

---


### GoogleApihubCurationTimeoutsOutputReference <a name="GoogleApihubCurationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApihubCuration } from '@cdktn/provider-google-beta'

new googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApihubCurationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>

---



