# `googleVmwareengineExternalAccessRule` Submodule <a name="`googleVmwareengineExternalAccessRule` Submodule" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineExternalAccessRule <a name="GoogleVmwareengineExternalAccessRule" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

new googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule(scope: Construct, id: string, config: GoogleVmwareengineExternalAccessRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig">GoogleVmwareengineExternalAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig">GoogleVmwareengineExternalAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putDestinationIpRanges">putDestinationIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putSourceIpRanges">putSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationIpRanges` <a name="putDestinationIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putDestinationIpRanges"></a>

```typescript
public putDestinationIpRanges(value: IResolvable | GoogleVmwareengineExternalAccessRuleDestinationIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putDestinationIpRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>[]

---

##### `putSourceIpRanges` <a name="putSourceIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putSourceIpRanges"></a>

```typescript
public putSourceIpRanges(value: IResolvable | GoogleVmwareengineExternalAccessRuleSourceIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putSourceIpRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVmwareengineExternalAccessRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVmwareengineExternalAccessRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isConstruct"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformElement"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformResource"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVmwareengineExternalAccessRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVmwareengineExternalAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRanges">destinationIpRanges</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList">GoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList">GoogleVmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference">GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRangesInput">destinationIpRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRangesInput">sourceIpRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePortsInput">sourcePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinationIpRanges`<sup>Required</sup> <a name="destinationIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```typescript
public readonly destinationIpRanges: GoogleVmwareengineExternalAccessRuleDestinationIpRangesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList">GoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: GoogleVmwareengineExternalAccessRuleSourceIpRangesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList">GoogleVmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference">GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationIpRangesInput`<sup>Optional</sup> <a name="destinationIpRangesInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRangesInput"></a>

```typescript
public readonly destinationIpRangesInput: IResolvable | GoogleVmwareengineExternalAccessRuleDestinationIpRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `sourceIpRangesInput`<sup>Optional</sup> <a name="sourceIpRangesInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRangesInput"></a>

```typescript
public readonly sourceIpRangesInput: IResolvable | GoogleVmwareengineExternalAccessRuleSourceIpRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>[]

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePortsInput"></a>

```typescript
public readonly sourcePortsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVmwareengineExternalAccessRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineExternalAccessRuleConfig <a name="GoogleVmwareengineExternalAccessRuleConfig" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

const googleVmwareengineExternalAccessRuleConfig: googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.action">action</a></code> | <code>string</code> | The action that the external access rule performs. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationIpRanges">destinationIpRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>[]</code> | destination_ip_ranges block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | A list of destination ports to which the external access rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which the external access rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.name">name</a></code> | <code>string</code> | The ID of the external access rule. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.priority">priority</a></code> | <code>number</code> | External access rule priority, which determines the external access rule to use when multiple rules apply. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourceIpRanges">sourceIpRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>[]</code> | source_ip_ranges block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | A list of source ports to which the external access rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.description">description</a></code> | <code>string</code> | User-provided description for the external access rule. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#id GoogleVmwareengineExternalAccessRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action that the external access rule performs. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#action GoogleVmwareengineExternalAccessRule#action}

---

##### `destinationIpRanges`<sup>Required</sup> <a name="destinationIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationIpRanges"></a>

```typescript
public readonly destinationIpRanges: IResolvable | GoogleVmwareengineExternalAccessRuleDestinationIpRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>[]

destination_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#destination_ip_ranges GoogleVmwareengineExternalAccessRule#destination_ip_ranges}

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

A list of destination ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#destination_ports GoogleVmwareengineExternalAccessRule#destination_ports}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#ip_protocol GoogleVmwareengineExternalAccessRule#ip_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#name GoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#parent GoogleVmwareengineExternalAccessRule#parent}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

External access rule priority, which determines the external access rule to use when multiple rules apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#priority GoogleVmwareengineExternalAccessRule#priority}

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: IResolvable | GoogleVmwareengineExternalAccessRuleSourceIpRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>[]

source_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#source_ip_ranges GoogleVmwareengineExternalAccessRule#source_ip_ranges}

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

A list of source ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#source_ports GoogleVmwareengineExternalAccessRule#source_ports}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#deletion_policy GoogleVmwareengineExternalAccessRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description for the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#description GoogleVmwareengineExternalAccessRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#id GoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVmwareengineExternalAccessRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#timeouts GoogleVmwareengineExternalAccessRule#timeouts}

---

### GoogleVmwareengineExternalAccessRuleDestinationIpRanges <a name="GoogleVmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

const googleVmwareengineExternalAccessRuleDestinationIpRanges: googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress">externalAddress</a></code> | <code>string</code> | The name of an 'ExternalAddress' resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | An IP address range in the CIDR format. |

---

##### `externalAddress`<sup>Optional</sup> <a name="externalAddress" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress"></a>

```typescript
public readonly externalAddress: string;
```

- *Type:* string

The name of an 'ExternalAddress' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#external_address GoogleVmwareengineExternalAccessRule#external_address}

---

##### `ipAddressRange`<sup>Optional</sup> <a name="ipAddressRange" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#ip_address_range GoogleVmwareengineExternalAccessRule#ip_address_range}

---

### GoogleVmwareengineExternalAccessRuleSourceIpRanges <a name="GoogleVmwareengineExternalAccessRuleSourceIpRanges" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

const googleVmwareengineExternalAccessRuleSourceIpRanges: googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress">ipAddress</a></code> | <code>string</code> | A single IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | An IP address range in the CIDR format. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

A single IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#ip_address GoogleVmwareengineExternalAccessRule#ip_address}

---

##### `ipAddressRange`<sup>Optional</sup> <a name="ipAddressRange" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#ip_address_range GoogleVmwareengineExternalAccessRule#ip_address_range}

---

### GoogleVmwareengineExternalAccessRuleTimeouts <a name="GoogleVmwareengineExternalAccessRuleTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

const googleVmwareengineExternalAccessRuleTimeouts: googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#create GoogleVmwareengineExternalAccessRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#delete GoogleVmwareengineExternalAccessRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#update GoogleVmwareengineExternalAccessRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#create GoogleVmwareengineExternalAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#delete GoogleVmwareengineExternalAccessRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_external_access_rule#update GoogleVmwareengineExternalAccessRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineExternalAccessRuleDestinationIpRangesList <a name="GoogleVmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

new googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```typescript
public get(index: number): GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineExternalAccessRuleDestinationIpRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>[]

---


### GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

new googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress">resetExternalAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange">resetIpAddressRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalAddress` <a name="resetExternalAddress" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress"></a>

```typescript
public resetExternalAddress(): void
```

##### `resetIpAddressRange` <a name="resetIpAddressRange" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange"></a>

```typescript
public resetIpAddressRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput">externalAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput">ipAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">externalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalAddressInput`<sup>Optional</sup> <a name="externalAddressInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput"></a>

```typescript
public readonly externalAddressInput: string;
```

- *Type:* string

---

##### `ipAddressRangeInput`<sup>Optional</sup> <a name="ipAddressRangeInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput"></a>

```typescript
public readonly ipAddressRangeInput: string;
```

- *Type:* string

---

##### `externalAddress`<sup>Required</sup> <a name="externalAddress" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```typescript
public readonly externalAddress: string;
```

- *Type:* string

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineExternalAccessRuleDestinationIpRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>

---


### GoogleVmwareengineExternalAccessRuleSourceIpRangesList <a name="GoogleVmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

new googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```typescript
public get(index: number): GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineExternalAccessRuleSourceIpRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>[]

---


### GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

new googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange">resetIpAddressRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpAddressRange` <a name="resetIpAddressRange" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange"></a>

```typescript
public resetIpAddressRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput">ipAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipAddressRangeInput`<sup>Optional</sup> <a name="ipAddressRangeInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput"></a>

```typescript
public readonly ipAddressRangeInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineExternalAccessRuleSourceIpRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>

---


### GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference <a name="GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVmwareengineExternalAccessRule } from '@cdktn/provider-google-beta'

new googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVmwareengineExternalAccessRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>

---



