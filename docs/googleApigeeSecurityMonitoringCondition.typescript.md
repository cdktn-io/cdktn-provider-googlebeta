# `googleApigeeSecurityMonitoringCondition` Submodule <a name="`googleApigeeSecurityMonitoringCondition` Submodule" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityMonitoringCondition <a name="GoogleApigeeSecurityMonitoringCondition" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition google_apigee_security_monitoring_condition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

new googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition(scope: Construct, id: string, config: GoogleApigeeSecurityMonitoringConditionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig">GoogleApigeeSecurityMonitoringConditionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig">GoogleApigeeSecurityMonitoringConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources">putIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources">resetIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIncludeAllResources` <a name="putIncludeAllResources" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources"></a>

```typescript
public putIncludeAllResources(value: GoogleApigeeSecurityMonitoringConditionIncludeAllResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putIncludeAllResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApigeeSecurityMonitoringConditionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeAllResources` <a name="resetIncludeAllResources" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetIncludeAllResources"></a>

```typescript
public resetIncludeAllResources(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleApigeeSecurityMonitoringCondition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeSecurityMonitoringCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeSecurityMonitoringCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityMonitoringCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources">includeAllResources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources">totalDeployedResources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources">totalMonitoredResources</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput">conditionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput">includeAllResourcesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId">conditionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `includeAllResources`<sup>Required</sup> <a name="includeAllResources" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResources"></a>

```typescript
public readonly includeAllResources: GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference">GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference</a>

---

##### `totalDeployedResources`<sup>Required</sup> <a name="totalDeployedResources" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalDeployedResources"></a>

```typescript
public readonly totalDeployedResources: number;
```

- *Type:* number

---

##### `totalMonitoredResources`<sup>Required</sup> <a name="totalMonitoredResources" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.totalMonitoredResources"></a>

```typescript
public readonly totalMonitoredResources: number;
```

- *Type:* number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `conditionIdInput`<sup>Optional</sup> <a name="conditionIdInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionIdInput"></a>

```typescript
public readonly conditionIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeAllResourcesInput`<sup>Optional</sup> <a name="includeAllResourcesInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.includeAllResourcesInput"></a>

```typescript
public readonly includeAllResourcesInput: GoogleApigeeSecurityMonitoringConditionIncludeAllResources;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApigeeSecurityMonitoringConditionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `conditionId`<sup>Required</sup> <a name="conditionId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.conditionId"></a>

```typescript
public readonly conditionId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringCondition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityMonitoringConditionConfig <a name="GoogleApigeeSecurityMonitoringConditionConfig" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.Initializer"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

const googleApigeeSecurityMonitoringConditionConfig: googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId">conditionId</a></code> | <code>string</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile">profile</a></code> | <code>string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope">scope</a></code> | <code>string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources">includeAllResources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditionId`<sup>Required</sup> <a name="conditionId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.conditionId"></a>

```typescript
public readonly conditionId: string;
```

- *Type:* string

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#condition_id GoogleApigeeSecurityMonitoringCondition#condition_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#org_id GoogleApigeeSecurityMonitoringCondition#org_id}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#profile GoogleApigeeSecurityMonitoringCondition#profile}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#scope GoogleApigeeSecurityMonitoringCondition#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#deletion_policy GoogleApigeeSecurityMonitoringCondition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#id GoogleApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeAllResources`<sup>Optional</sup> <a name="includeAllResources" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.includeAllResources"></a>

```typescript
public readonly includeAllResources: GoogleApigeeSecurityMonitoringConditionIncludeAllResources;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#include_all_resources GoogleApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeSecurityMonitoringConditionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#timeouts GoogleApigeeSecurityMonitoringCondition#timeouts}

---

### GoogleApigeeSecurityMonitoringConditionIncludeAllResources <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResources" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources.Initializer"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

const googleApigeeSecurityMonitoringConditionIncludeAllResources: googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources = { ... }
```


### GoogleApigeeSecurityMonitoringConditionTimeouts <a name="GoogleApigeeSecurityMonitoringConditionTimeouts" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.Initializer"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

const googleApigeeSecurityMonitoringConditionTimeouts: googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#create GoogleApigeeSecurityMonitoringCondition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#delete GoogleApigeeSecurityMonitoringCondition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_security_monitoring_condition#update GoogleApigeeSecurityMonitoringCondition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference <a name="GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

new googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeSecurityMonitoringConditionIncludeAllResources;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionIncludeAllResources">GoogleApigeeSecurityMonitoringConditionIncludeAllResources</a>

---


### GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference <a name="GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityMonitoringCondition } from '@cdktn/provider-google-beta'

new googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeSecurityMonitoringConditionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeSecurityMonitoringCondition.GoogleApigeeSecurityMonitoringConditionTimeouts">GoogleApigeeSecurityMonitoringConditionTimeouts</a>

---



