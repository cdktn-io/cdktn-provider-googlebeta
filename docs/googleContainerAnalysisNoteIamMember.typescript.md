# `googleContainerAnalysisNoteIamMember` Submodule <a name="`googleContainerAnalysisNoteIamMember` Submodule" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAnalysisNoteIamMember <a name="GoogleContainerAnalysisNoteIamMember" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member google_container_analysis_note_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.Initializer"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

new googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember(scope: Construct, id: string, config: GoogleContainerAnalysisNoteIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig">GoogleContainerAnalysisNoteIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig">GoogleContainerAnalysisNoteIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleContainerAnalysisNoteIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition">GoogleContainerAnalysisNoteIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContainerAnalysisNoteIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isConstruct"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformElement"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformResource"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.generateConfigForImport"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleContainerAnalysisNoteIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAnalysisNoteIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAnalysisNoteIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContainerAnalysisNoteIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference">GoogleContainerAnalysisNoteIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition">GoogleContainerAnalysisNoteIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.noteInput">noteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.note">note</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleContainerAnalysisNoteIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference">GoogleContainerAnalysisNoteIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleContainerAnalysisNoteIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition">GoogleContainerAnalysisNoteIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `noteInput`<sup>Optional</sup> <a name="noteInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.noteInput"></a>

```typescript
public readonly noteInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAnalysisNoteIamMemberCondition <a name="GoogleContainerAnalysisNoteIamMemberCondition" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition.Initializer"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

const googleContainerAnalysisNoteIamMemberCondition: googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#expression GoogleContainerAnalysisNoteIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#title GoogleContainerAnalysisNoteIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#description GoogleContainerAnalysisNoteIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#expression GoogleContainerAnalysisNoteIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#title GoogleContainerAnalysisNoteIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#description GoogleContainerAnalysisNoteIamMember#description}.

---

### GoogleContainerAnalysisNoteIamMemberConfig <a name="GoogleContainerAnalysisNoteIamMemberConfig" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.Initializer"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

const googleContainerAnalysisNoteIamMemberConfig: googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#member GoogleContainerAnalysisNoteIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.note">note</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#note GoogleContainerAnalysisNoteIamMember#note}. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#role GoogleContainerAnalysisNoteIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition">GoogleContainerAnalysisNoteIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#id GoogleContainerAnalysisNoteIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#project GoogleContainerAnalysisNoteIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#member GoogleContainerAnalysisNoteIamMember#member}.

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#note GoogleContainerAnalysisNoteIamMember#note}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#role GoogleContainerAnalysisNoteIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleContainerAnalysisNoteIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition">GoogleContainerAnalysisNoteIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#condition GoogleContainerAnalysisNoteIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#id GoogleContainerAnalysisNoteIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_container_analysis_note_iam_member#project GoogleContainerAnalysisNoteIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAnalysisNoteIamMemberConditionOutputReference <a name="GoogleContainerAnalysisNoteIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleContainerAnalysisNoteIamMember } from '@cdktn/provider-google-beta'

new googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition">GoogleContainerAnalysisNoteIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAnalysisNoteIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContainerAnalysisNoteIamMember.GoogleContainerAnalysisNoteIamMemberCondition">GoogleContainerAnalysisNoteIamMemberCondition</a>

---



