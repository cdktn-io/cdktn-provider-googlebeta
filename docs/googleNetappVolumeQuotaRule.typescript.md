# `googleNetappVolumeQuotaRule` Submodule <a name="`googleNetappVolumeQuotaRule` Submodule" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeQuotaRule <a name="GoogleNetappVolumeQuotaRule" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule google_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

new googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule(scope: Construct, id: string, config: GoogleNetappVolumeQuotaRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig">GoogleNetappVolumeQuotaRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig">GoogleNetappVolumeQuotaRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetappVolumeQuotaRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetappVolumeQuotaRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappVolumeQuotaRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput">diskLimitMibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib">diskLimitMib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappVolumeQuotaRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference">GoogleNetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskLimitMibInput`<sup>Optional</sup> <a name="diskLimitMibInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMibInput"></a>

```typescript
public readonly diskLimitMibInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetappVolumeQuotaRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskLimitMib`<sup>Required</sup> <a name="diskLimitMib" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.diskLimitMib"></a>

```typescript
public readonly diskLimitMib: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeQuotaRuleConfig <a name="GoogleNetappVolumeQuotaRuleConfig" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.Initializer"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

const googleNetappVolumeQuotaRuleConfig: googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib">diskLimitMib</a></code> | <code>number</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name">name</a></code> | <code>string</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type">type</a></code> | <code>string</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName">volumeName</a></code> | <code>string</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description">description</a></code> | <code>string</code> | Description for the quota rule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location">location</a></code> | <code>string</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target">target</a></code> | <code>string</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `diskLimitMib`<sup>Required</sup> <a name="diskLimitMib" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.diskLimitMib"></a>

```typescript
public readonly diskLimitMib: number;
```

- *Type:* number

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#disk_limit_mib GoogleNetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#name GoogleNetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#type GoogleNetappVolumeQuotaRule#type}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#volume_name GoogleNetappVolumeQuotaRule#volume_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#deletion_policy GoogleNetappVolumeQuotaRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#description GoogleNetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#id GoogleNetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#labels GoogleNetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#location GoogleNetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#project GoogleNetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:
  - UNIX UID for individual user quota
  - UNIX GID for individual group quota
Valid targets for volumes with SMB protocol enabled:
  - Windows SID for individual user quota
Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#target GoogleNetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappVolumeQuotaRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#timeouts GoogleNetappVolumeQuotaRule#timeouts}

---

### GoogleNetappVolumeQuotaRuleTimeouts <a name="GoogleNetappVolumeQuotaRuleTimeouts" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.Initializer"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

const googleNetappVolumeQuotaRuleTimeouts: googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#create GoogleNetappVolumeQuotaRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#delete GoogleNetappVolumeQuotaRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_netapp_volume_quota_rule#update GoogleNetappVolumeQuotaRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeQuotaRuleTimeoutsOutputReference <a name="GoogleNetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetappVolumeQuotaRule } from '@cdktn/provider-google-beta'

new googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetappVolumeQuotaRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetappVolumeQuotaRule.GoogleNetappVolumeQuotaRuleTimeouts">GoogleNetappVolumeQuotaRuleTimeouts</a>

---



