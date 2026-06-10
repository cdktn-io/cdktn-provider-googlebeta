# `googleFirebaseRemoteConfigRemoteConfig` Submodule <a name="`googleFirebaseRemoteConfigRemoteConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseRemoteConfigRemoteConfig <a name="GoogleFirebaseRemoteConfigRemoteConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config google_firebase_remote_config_remote_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig(scope: Construct, id: string, config?: GoogleFirebaseRemoteConfigRemoteConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig">GoogleFirebaseRemoteConfigRemoteConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig">GoogleFirebaseRemoteConfigRemoteConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups">putParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups">resetParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>[]

---

##### `putParameterGroups` <a name="putParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups"></a>

```typescript
public putParameterGroups(value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters"></a>

```typescript
public putParameters(value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseRemoteConfigRemoteConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameterGroups` <a name="resetParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups"></a>

```typescript
public resetParameterGroups(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseRemoteConfigRemoteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseRemoteConfigRemoteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseRemoteConfigRemoteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups">parameterGroups</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version">version</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput">parameterGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions"></a>

```typescript
public readonly conditions: GoogleFirebaseRemoteConfigRemoteConfigConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameterGroups`<sup>Required</sup> <a name="parameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups"></a>

```typescript
public readonly parameterGroups: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters"></a>

```typescript
public readonly parameters: GoogleFirebaseRemoteConfigRemoteConfigParametersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version"></a>

```typescript
public readonly version: GoogleFirebaseRemoteConfigRemoteConfigVersionList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterGroupsInput`<sup>Optional</sup> <a name="parameterGroupsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput"></a>

```typescript
public readonly parameterGroupsInput: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditions <a name="GoogleFirebaseRemoteConfigRemoteConfigConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigConditions: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression">expression</a></code> | <code>string</code> | The logic of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name">name</a></code> | <code>string</code> | A non-empty and unique name of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor">tagColor</a></code> | <code>string</code> | The color associated with this condition for display purposes in the Firebase Console. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The logic of this condition.

See the documentation regarding
[Condition
Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
for the expected syntax of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#expression GoogleFirebaseRemoteConfigRemoteConfig#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A non-empty and unique name of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#name GoogleFirebaseRemoteConfigRemoteConfig#name}

---

##### `tagColor`<sup>Optional</sup> <a name="tagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor"></a>

```typescript
public readonly tagColor: string;
```

- *Type:* string

The color associated with this condition for display purposes in the Firebase Console.

Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#tag_color GoogleFirebaseRemoteConfigRemoteConfig#tag_color}

---

### GoogleFirebaseRemoteConfigRemoteConfigConfig <a name="GoogleFirebaseRemoteConfigRemoteConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigConfig: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups">parameterGroups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>[]</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>[]</code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#conditions GoogleFirebaseRemoteConfigRemoteConfig#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterGroups`<sup>Optional</sup> <a name="parameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups"></a>

```typescript
public readonly parameterGroups: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameter_groups GoogleFirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseRemoteConfigRemoteConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#timeouts GoogleFirebaseRemoteConfigRemoteConfig#timeouts}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroups <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigParameterGroups: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description">description</a></code> | <code>string</code> | A description for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]</code> | parameters block. |

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the group.

Its length must be less than or equal to 256
characters. A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName">parameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues">conditionalValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description">description</a></code> | <code>string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType">valueType</a></code> | <code>string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditionalValues`<sup>Optional</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues"></a>

```typescript
public readonly conditionalValues: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName">conditionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value">value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName"></a>

```typescript
public readonly conditionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value">value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigParameters: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName">parameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues">conditionalValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description">description</a></code> | <code>string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType">valueType</a></code> | <code>string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditionalValues`<sup>Optional</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues"></a>

```typescript
public readonly conditionalValues: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigParametersConditionalValues: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName">conditionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value">value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName"></a>

```typescript
public readonly conditionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigParametersDefaultValue: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value">value</a></code> | <code>string</code> | The string value that the parameter is set to. |

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigTimeouts <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigTimeouts: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}.

---

### GoogleFirebaseRemoteConfigRemoteConfigVersion <a name="GoogleFirebaseRemoteConfigRemoteConfigVersion" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigVersion: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion = { ... }
```


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

const googleFirebaseRemoteConfigRemoteConfigVersionUpdateUser: googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditionsList <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>[]

---


### GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor">resetTagColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagColor` <a name="resetTagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor"></a>

```typescript
public resetTagColor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput">tagColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor">tagColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagColorInput`<sup>Optional</sup> <a name="tagColorInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput"></a>

```typescript
public readonly tagColorInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tagColor`<sup>Required</sup> <a name="tagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor"></a>

```typescript
public readonly tagColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>[]

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput"></a>

```typescript
public readonly parameterGroupNameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```typescript
public resetUseInAppDefault(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput">conditionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName">conditionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionNameInput`<sup>Optional</sup> <a name="conditionNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```typescript
public readonly conditionNameInput: string;
```

- *Type:* string

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```typescript
public readonly useInAppDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName"></a>

```typescript
public readonly conditionName: string;
```

- *Type:* string

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```typescript
public resetUseInAppDefault(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```typescript
public readonly useInAppDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>[]

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues">putConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues">resetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionalValues` <a name="putConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues"></a>

```typescript
public putConditionalValues(value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

---

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue"></a>

```typescript
public putDefaultValue(value: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `resetConditionalValues` <a name="resetConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues"></a>

```typescript
public resetConditionalValues(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType"></a>

```typescript
public resetValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues">conditionalValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput">conditionalValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionalValues`<sup>Required</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues"></a>

```typescript
public readonly conditionalValues: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a>

---

##### `conditionalValuesInput`<sup>Optional</sup> <a name="conditionalValuesInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput"></a>

```typescript
public readonly conditionalValuesInput: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>[]

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```typescript
public resetUseInAppDefault(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput">conditionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName">conditionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionNameInput`<sup>Optional</sup> <a name="conditionNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```typescript
public readonly conditionNameInput: string;
```

- *Type:* string

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```typescript
public readonly useInAppDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName"></a>

```typescript
public readonly conditionName: string;
```

- *Type:* string

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```typescript
public resetUseInAppDefault(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```typescript
public readonly useInAppDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```typescript
public readonly useInAppDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>[]

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues">putConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues">resetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionalValues` <a name="putConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues"></a>

```typescript
public putConditionalValues(value: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

---

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue"></a>

```typescript
public putDefaultValue(value: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `resetConditionalValues` <a name="resetConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues"></a>

```typescript
public resetConditionalValues(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType"></a>

```typescript
public resetValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues">conditionalValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput">conditionalValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionalValues`<sup>Required</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues"></a>

```typescript
public readonly conditionalValues: GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a>

---

##### `conditionalValuesInput`<sup>Optional</sup> <a name="conditionalValuesInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput"></a>

```typescript
public readonly conditionalValuesInput: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>[]

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseRemoteConfigRemoteConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy">isLegacy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource">rollbackSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin">updateOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType">updateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser">updateUser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isLegacy`<sup>Required</sup> <a name="isLegacy" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy"></a>

```typescript
public readonly isLegacy: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `rollbackSource`<sup>Required</sup> <a name="rollbackSource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource"></a>

```typescript
public readonly rollbackSource: string;
```

- *Type:* string

---

##### `updateOrigin`<sup>Required</sup> <a name="updateOrigin" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin"></a>

```typescript
public readonly updateOrigin: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType"></a>

```typescript
public readonly updateType: string;
```

- *Type:* string

---

##### `updateUser`<sup>Required</sup> <a name="updateUser" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser"></a>

```typescript
public readonly updateUser: GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a>

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseRemoteConfigRemoteConfigVersion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get"></a>

```typescript
public get(index: number): GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer"></a>

```typescript
import { googleFirebaseRemoteConfigRemoteConfig } from '@cdktn/provider-google-beta'

new googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a>

---



