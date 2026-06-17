# `googleCesToolset` Submodule <a name="`googleCesToolset` Submodule" id="@cdktn/provider-google-beta.googleCesToolset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesToolset <a name="GoogleCesToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset google_ces_toolset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolset(scope: Construct, id: string, config: GoogleCesToolsetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig">GoogleCesToolsetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig">GoogleCesToolsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset">putMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset">putOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetExecutionType">resetExecutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetMcpToolset">resetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOpenApiToolset">resetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMcpToolset` <a name="putMcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset"></a>

```typescript
public putMcpToolset(value: GoogleCesToolsetMcpToolset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putMcpToolset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---

##### `putOpenApiToolset` <a name="putOpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset"></a>

```typescript
public putOpenApiToolset(value: GoogleCesToolsetOpenApiToolset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putOpenApiToolset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCesToolsetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExecutionType` <a name="resetExecutionType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetExecutionType"></a>

```typescript
public resetExecutionType(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMcpToolset` <a name="resetMcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetMcpToolset"></a>

```typescript
public resetMcpToolset(): void
```

##### `resetOpenApiToolset` <a name="resetOpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetOpenApiToolset"></a>

```typescript
public resetOpenApiToolset(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesToolset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

googleCesToolset.GoogleCesToolset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

googleCesToolset.GoogleCesToolset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

googleCesToolset.GoogleCesToolset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

googleCesToolset.GoogleCesToolset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCesToolset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesToolset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesToolset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesToolset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolset">mcpToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference">GoogleCesToolsetMcpToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolset">openApiToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference">GoogleCesToolsetOpenApiToolsetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference">GoogleCesToolsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionTypeInput">executionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolsetInput">mcpToolsetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolsetInput">openApiToolsetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetIdInput">toolsetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionType">executionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetId">toolsetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `mcpToolset`<sup>Required</sup> <a name="mcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolset"></a>

```typescript
public readonly mcpToolset: GoogleCesToolsetMcpToolsetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference">GoogleCesToolsetMcpToolsetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openApiToolset`<sup>Required</sup> <a name="openApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolset"></a>

```typescript
public readonly openApiToolset: GoogleCesToolsetOpenApiToolsetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference">GoogleCesToolsetOpenApiToolsetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesToolsetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference">GoogleCesToolsetTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionTypeInput`<sup>Optional</sup> <a name="executionTypeInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionTypeInput"></a>

```typescript
public readonly executionTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mcpToolsetInput`<sup>Optional</sup> <a name="mcpToolsetInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.mcpToolsetInput"></a>

```typescript
public readonly mcpToolsetInput: GoogleCesToolsetMcpToolset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---

##### `openApiToolsetInput`<sup>Optional</sup> <a name="openApiToolsetInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.openApiToolsetInput"></a>

```typescript
public readonly openApiToolsetInput: GoogleCesToolsetOpenApiToolset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCesToolsetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---

##### `toolsetIdInput`<sup>Optional</sup> <a name="toolsetIdInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetIdInput"></a>

```typescript
public readonly toolsetIdInput: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionType`<sup>Required</sup> <a name="executionType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.executionType"></a>

```typescript
public readonly executionType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `toolsetId`<sup>Required</sup> <a name="toolsetId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.toolsetId"></a>

```typescript
public readonly toolsetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesToolsetConfig <a name="GoogleCesToolsetConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetConfig: googleCesToolset.GoogleCesToolsetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.toolsetId">toolsetId</a></code> | <code>string</code> | The ID to use for the toolset, which will become the final component of the toolset's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.description">description</a></code> | <code>string</code> | The description of the toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the toolset. Must be unique within the same app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.executionType">executionType</a></code> | <code>string</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.mcpToolset">mcpToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | mcp_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.openApiToolset">openApiToolset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | open_api_toolset block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#app GoogleCesToolset#app}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#location GoogleCesToolset#location}

---

##### `toolsetId`<sup>Required</sup> <a name="toolsetId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.toolsetId"></a>

```typescript
public readonly toolsetId: string;
```

- *Type:* string

The ID to use for the toolset, which will become the final component of the toolset's resource name.

If not provided, a unique ID will be
automatically assigned for the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#toolset_id GoogleCesToolset#toolset_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#deletion_policy GoogleCesToolset#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#description GoogleCesToolset#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the toolset. Must be unique within the same app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

##### `executionType`<sup>Optional</sup> <a name="executionType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.executionType"></a>

```typescript
public readonly executionType: string;
```

- *Type:* string

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#execution_type GoogleCesToolset#execution_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#id GoogleCesToolset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpToolset`<sup>Optional</sup> <a name="mcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.mcpToolset"></a>

```typescript
public readonly mcpToolset: GoogleCesToolsetMcpToolset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

mcp_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#mcp_toolset GoogleCesToolset#mcp_toolset}

---

##### `openApiToolset`<sup>Optional</sup> <a name="openApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.openApiToolset"></a>

```typescript
public readonly openApiToolset: GoogleCesToolsetOpenApiToolset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

open_api_toolset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#open_api_toolset GoogleCesToolset#open_api_toolset}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#project GoogleCesToolset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesToolsetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#timeouts GoogleCesToolset#timeouts}

---

### GoogleCesToolsetMcpToolset <a name="GoogleCesToolsetMcpToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolset: googleCesToolset.GoogleCesToolsetMcpToolset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serverAddress">serverAddress</a></code> | <code>string</code> | The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.customHeaders">customHeaders</a></code> | <code>{[ key: string ]: string}</code> | The custom headers to send in the request to the MCP server. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | tls_config block. |

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

The address of the MCP server, for example, "https://example.com/mcp/". If the server is built with the MCP SDK, the url should be suffixed with "/mcp/". Only Streamable HTTP transport based servers are supported. See https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#server_address GoogleCesToolset#server_address}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: GoogleCesToolsetMcpToolsetApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

##### `customHeaders`<sup>Optional</sup> <a name="customHeaders" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.customHeaders"></a>

```typescript
public readonly customHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The custom headers to send in the request to the MCP server.

The values
must be in the format '$context.variables.<name_of_variable>' and can be
set in the session variables. See
https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/tool/open-api#openapi-injection
for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#custom_headers GoogleCesToolset#custom_headers}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleCesToolsetMcpToolsetServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleCesToolsetMcpToolsetTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

### GoogleCesToolsetMcpToolsetApiAuthentication <a name="GoogleCesToolsetMcpToolsetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetApiAuthentication: googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

##### `serviceAgentIdTokenAuthConfig`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```typescript
public readonly serviceAgentIdTokenAuthConfig: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig: googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request.

For API key auth on MCP toolsets,
the API key can only be sent in the request header.
Possible values:
HEADER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig: googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

### GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetApiAuthenticationOauthConfig: googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig: googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig: googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = { ... }
```


### GoogleCesToolsetMcpToolsetServiceDirectoryConfig <a name="GoogleCesToolsetMcpToolsetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetServiceDirectoryConfig: googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

### GoogleCesToolsetMcpToolsetTlsConfig <a name="GoogleCesToolsetMcpToolsetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetTlsConfig: googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.property.caCerts">caCerts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig.property.caCerts"></a>

```typescript
public readonly caCerts: IResolvable | GoogleCesToolsetMcpToolsetTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

### GoogleCesToolsetMcpToolsetTlsConfigCaCerts <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetMcpToolsetTlsConfigCaCerts: googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

### GoogleCesToolsetOpenApiToolset <a name="GoogleCesToolsetOpenApiToolset" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolset: googleCesToolset.GoogleCesToolsetOpenApiToolset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.openApiSchema">openApiSchema</a></code> | <code>string</code> | The OpenAPI schema of the toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.ignoreUnknownFields">ignoreUnknownFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | tls_config block. |

---

##### `openApiSchema`<sup>Required</sup> <a name="openApiSchema" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.openApiSchema"></a>

```typescript
public readonly openApiSchema: string;
```

- *Type:* string

The OpenAPI schema of the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#open_api_schema GoogleCesToolset#open_api_schema}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: GoogleCesToolsetOpenApiToolsetApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#api_authentication GoogleCesToolset#api_authentication}

---

##### `ignoreUnknownFields`<sup>Optional</sup> <a name="ignoreUnknownFields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.ignoreUnknownFields"></a>

```typescript
public readonly ignoreUnknownFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the agent will ignore unknown fields in the API response for all operations defined in the OpenAPI schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#ignore_unknown_fields GoogleCesToolset#ignore_unknown_fields}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_directory_config GoogleCesToolset#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleCesToolsetOpenApiToolsetTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#tls_config GoogleCesToolset#tls_config}

---

### GoogleCesToolsetOpenApiToolsetApiAuthentication <a name="GoogleCesToolsetOpenApiToolsetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetApiAuthentication: googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | service_agent_id_token_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#api_key_config GoogleCesToolset#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#bearer_token_config GoogleCesToolset#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#oauth_config GoogleCesToolset#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_account_auth_config GoogleCesToolset#service_account_auth_config}

---

##### `serviceAgentIdTokenAuthConfig`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication.property.serviceAgentIdTokenAuthConfig"></a>

```typescript
public readonly serviceAgentIdTokenAuthConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

service_agent_id_token_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_agent_id_token_auth_config GoogleCesToolset#service_agent_id_token_auth_config}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig: googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#api_key_secret_version GoogleCesToolset#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#key_name GoogleCesToolset#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#request_location GoogleCesToolset#request_location}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig: googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#token GoogleCesToolset#token}.

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig: googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#client_id GoogleCesToolset#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#client_secret_version GoogleCesToolset#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#oauth_grant_type GoogleCesToolset#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#token_endpoint GoogleCesToolset#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig: googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service_account GoogleCesToolset#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#scopes GoogleCesToolset#scopes}

---

### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig: googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig = { ... }
```


### GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig <a name="GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetServiceDirectoryConfig: googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: 'projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}'. Location of the service directory must be the same as the location of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#service GoogleCesToolset#service}

---

### GoogleCesToolsetOpenApiToolsetTlsConfig <a name="GoogleCesToolsetOpenApiToolsetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetTlsConfig: googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.property.caCerts">caCerts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig.property.caCerts"></a>

```typescript
public readonly caCerts: IResolvable | GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#ca_certs GoogleCesToolset#ca_certs}

---

### GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetOpenApiToolsetTlsConfigCaCerts: googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert">cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, CES will use Google's default trust
store to verify certificates. N.B. Make sure the HTTPS server
certificates are signed with "subject alt name". For instance a
certificate can be self-signed using the following command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#cert GoogleCesToolset#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#display_name GoogleCesToolset#display_name}

---

### GoogleCesToolsetTimeouts <a name="GoogleCesToolsetTimeouts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

const googleCesToolsetTimeouts: googleCesToolset.GoogleCesToolsetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#create GoogleCesToolset#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#update GoogleCesToolset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#create GoogleCesToolset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#delete GoogleCesToolset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_toolset#update GoogleCesToolset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```typescript
public readonly apiKeySecretVersionInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```typescript
public readonly clientSecretVersionInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">putServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">resetServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```typescript
public putServiceAccountAuthConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `putServiceAgentIdTokenAuthConfig` <a name="putServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```typescript
public putServiceAgentIdTokenAuthConfig(value: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```typescript
public resetServiceAccountAuthConfig(): void
```

##### `resetServiceAgentIdTokenAuthConfig` <a name="resetServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```typescript
public resetServiceAgentIdTokenAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">serviceAgentIdTokenAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `serviceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```typescript
public readonly serviceAgentIdTokenAuthConfig: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetMcpToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetMcpToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```typescript
public readonly serviceAccountAuthConfigInput: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `serviceAgentIdTokenAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```typescript
public readonly serviceAgentIdTokenAuthConfigInput: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetMcpToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### GoogleCesToolsetMcpToolsetOutputReference <a name="GoogleCesToolsetMcpToolsetOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetCustomHeaders">resetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication"></a>

```typescript
public putApiAuthentication(value: GoogleCesToolsetMcpToolsetApiAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: GoogleCesToolsetMcpToolsetServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: GoogleCesToolsetMcpToolsetTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetApiAuthentication"></a>

```typescript
public resetApiAuthentication(): void
```

##### `resetCustomHeaders` <a name="resetCustomHeaders" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetCustomHeaders"></a>

```typescript
public resetCustomHeaders(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference">GoogleCesToolsetMcpToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeadersInput">customHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddressInput">serverAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeaders">customHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddress">serverAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference">GoogleCesToolsetMcpToolsetApiAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleCesToolsetMcpToolsetTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference">GoogleCesToolsetMcpToolsetTlsConfigOutputReference</a>

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.apiAuthenticationInput"></a>

```typescript
public readonly apiAuthenticationInput: GoogleCesToolsetMcpToolsetApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetApiAuthentication">GoogleCesToolsetMcpToolsetApiAuthentication</a>

---

##### `customHeadersInput`<sup>Optional</sup> <a name="customHeadersInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeadersInput"></a>

```typescript
public readonly customHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serverAddressInput`<sup>Optional</sup> <a name="serverAddressInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddressInput"></a>

```typescript
public readonly serverAddressInput: string;
```

- *Type:* string

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: GoogleCesToolsetMcpToolsetServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: GoogleCesToolsetMcpToolsetTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.customHeaders"></a>

```typescript
public readonly customHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolset">GoogleCesToolsetMcpToolset</a>

---


### GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference <a name="GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetServiceDirectoryConfig">GoogleCesToolsetMcpToolsetServiceDirectoryConfig</a>

---


### GoogleCesToolsetMcpToolsetTlsConfigCaCertsList <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get"></a>

```typescript
public get(index: number): GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesToolsetMcpToolsetTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

---


### GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference <a name="GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesToolsetMcpToolsetTlsConfigCaCerts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>

---


### GoogleCesToolsetMcpToolsetTlsConfigOutputReference <a name="GoogleCesToolsetMcpToolsetTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts"></a>

```typescript
public putCaCerts(value: IResolvable | GoogleCesToolsetMcpToolsetTlsConfigCaCerts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList">GoogleCesToolsetMcpToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCerts"></a>

```typescript
public readonly caCerts: GoogleCesToolsetMcpToolsetTlsConfigCaCertsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCertsList">GoogleCesToolsetMcpToolsetTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```typescript
public readonly caCertsInput: IResolvable | GoogleCesToolsetMcpToolsetTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigCaCerts">GoogleCesToolsetMcpToolsetTlsConfigCaCerts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetMcpToolsetTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetMcpToolsetTlsConfig">GoogleCesToolsetMcpToolsetTlsConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```typescript
public readonly apiKeySecretVersionInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```typescript
public readonly clientSecretVersionInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig">putServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig">resetServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```typescript
public putServiceAccountAuthConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `putServiceAgentIdTokenAuthConfig` <a name="putServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig"></a>

```typescript
public putServiceAgentIdTokenAuthConfig(value: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.putServiceAgentIdTokenAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```typescript
public resetServiceAccountAuthConfig(): void
```

##### `resetServiceAgentIdTokenAuthConfig` <a name="resetServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.resetServiceAgentIdTokenAuthConfig"></a>

```typescript
public resetServiceAgentIdTokenAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">serviceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput">serviceAgentIdTokenAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `serviceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="serviceAgentIdTokenAuthConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```typescript
public readonly serviceAgentIdTokenAuthConfig: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```typescript
public readonly serviceAccountAuthConfigInput: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---

##### `serviceAgentIdTokenAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentIdTokenAuthConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfigInput"></a>

```typescript
public readonly serviceAgentIdTokenAuthConfigInput: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig">GoogleCesToolsetOpenApiToolsetApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### GoogleCesToolsetOpenApiToolsetOutputReference <a name="GoogleCesToolsetOpenApiToolsetOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields">resetIgnoreUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication"></a>

```typescript
public putApiAuthentication(value: GoogleCesToolsetOpenApiToolsetApiAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: GoogleCesToolsetOpenApiToolsetTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetApiAuthentication"></a>

```typescript
public resetApiAuthentication(): void
```

##### `resetIgnoreUnknownFields` <a name="resetIgnoreUnknownFields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetIgnoreUnknownFields"></a>

```typescript
public resetIgnoreUnknownFields(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference">GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput">ignoreUnknownFieldsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput">openApiSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields">ignoreUnknownFields</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchema">openApiSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference">GoogleCesToolsetOpenApiToolsetApiAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference">GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.apiAuthenticationInput"></a>

```typescript
public readonly apiAuthenticationInput: GoogleCesToolsetOpenApiToolsetApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetApiAuthentication">GoogleCesToolsetOpenApiToolsetApiAuthentication</a>

---

##### `ignoreUnknownFieldsInput`<sup>Optional</sup> <a name="ignoreUnknownFieldsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFieldsInput"></a>

```typescript
public readonly ignoreUnknownFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `openApiSchemaInput`<sup>Optional</sup> <a name="openApiSchemaInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchemaInput"></a>

```typescript
public readonly openApiSchemaInput: string;
```

- *Type:* string

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: GoogleCesToolsetOpenApiToolsetTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---

##### `ignoreUnknownFields`<sup>Required</sup> <a name="ignoreUnknownFields" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.ignoreUnknownFields"></a>

```typescript
public readonly ignoreUnknownFields: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `openApiSchema`<sup>Required</sup> <a name="openApiSchema" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.openApiSchema"></a>

```typescript
public readonly openApiSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolset">GoogleCesToolsetOpenApiToolset</a>

---


### GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig">GoogleCesToolsetOpenApiToolsetServiceDirectoryConfig</a>

---


### GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get"></a>

```typescript
public get(index: number): GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

---


### GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference <a name="GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>

---


### GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference <a name="GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts"></a>

```typescript
public putCaCerts(value: IResolvable | GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList">GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCerts"></a>

```typescript
public readonly caCerts: GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList">GoogleCesToolsetOpenApiToolsetTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.caCertsInput"></a>

```typescript
public readonly caCertsInput: IResolvable | GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts">GoogleCesToolsetOpenApiToolsetTlsConfigCaCerts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesToolsetOpenApiToolsetTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetOpenApiToolsetTlsConfig">GoogleCesToolsetOpenApiToolsetTlsConfig</a>

---


### GoogleCesToolsetTimeoutsOutputReference <a name="GoogleCesToolsetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCesToolset } from '@cdktn/provider-google-beta'

new googleCesToolset.GoogleCesToolsetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesToolsetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesToolset.GoogleCesToolsetTimeouts">GoogleCesToolsetTimeouts</a>

---



