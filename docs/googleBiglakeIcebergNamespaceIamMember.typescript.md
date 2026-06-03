# `googleBiglakeIcebergNamespaceIamMember` Submodule <a name="`googleBiglakeIcebergNamespaceIamMember` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergNamespaceIamMember <a name="GoogleBiglakeIcebergNamespaceIamMember" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member google_biglake_iceberg_namespace_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember(scope: Construct, id: string, config: GoogleBiglakeIcebergNamespaceIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig">GoogleBiglakeIcebergNamespaceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig">GoogleBiglakeIcebergNamespaceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleBiglakeIcebergNamespaceIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergNamespaceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isConstruct"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBiglakeIcebergNamespaceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBiglakeIcebergNamespaceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBiglakeIcebergNamespaceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergNamespaceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference">GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference">GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleBiglakeIcebergNamespaceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergNamespaceIamMemberCondition <a name="GoogleBiglakeIcebergNamespaceIamMemberCondition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.Initializer"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergNamespaceIamMemberCondition: googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#expression GoogleBiglakeIcebergNamespaceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#title GoogleBiglakeIcebergNamespaceIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#description GoogleBiglakeIcebergNamespaceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#expression GoogleBiglakeIcebergNamespaceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#title GoogleBiglakeIcebergNamespaceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#description GoogleBiglakeIcebergNamespaceIamMember#description}.

---

### GoogleBiglakeIcebergNamespaceIamMemberConfig <a name="GoogleBiglakeIcebergNamespaceIamMemberConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.Initializer"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

const googleBiglakeIcebergNamespaceIamMemberConfig: googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#catalog GoogleBiglakeIcebergNamespaceIamMember#catalog}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#member GoogleBiglakeIcebergNamespaceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#namespace_id GoogleBiglakeIcebergNamespaceIamMember#namespace_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#role GoogleBiglakeIcebergNamespaceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#id GoogleBiglakeIcebergNamespaceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#project GoogleBiglakeIcebergNamespaceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#catalog GoogleBiglakeIcebergNamespaceIamMember#catalog}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#member GoogleBiglakeIcebergNamespaceIamMember#member}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#namespace_id GoogleBiglakeIcebergNamespaceIamMember#namespace_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#role GoogleBiglakeIcebergNamespaceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleBiglakeIcebergNamespaceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#condition GoogleBiglakeIcebergNamespaceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#id GoogleBiglakeIcebergNamespaceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_biglake_iceberg_namespace_iam_member#project GoogleBiglakeIcebergNamespaceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference <a name="GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleBiglakeIcebergNamespaceIamMember } from '@cdktn/provider-google-beta'

new googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBiglakeIcebergNamespaceIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

---



