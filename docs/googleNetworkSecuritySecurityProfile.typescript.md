# `googleNetworkSecuritySecurityProfile` Submodule <a name="`googleNetworkSecuritySecurityProfile` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySecurityProfile <a name="GoogleNetworkSecuritySecurityProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile google_network_security_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile(scope: Construct, id: string, config: GoogleNetworkSecuritySecurityProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig">GoogleNetworkSecuritySecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig">GoogleNetworkSecuritySecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomInterceptProfile">putCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomMirroringProfile">putCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile">putThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putUrlFilteringProfile">putUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putWildfireAnalysisProfile">putWildfireAnalysisProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomInterceptProfile">resetCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomMirroringProfile">resetCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetThreatPreventionProfile">resetThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetUrlFilteringProfile">resetUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetWildfireAnalysisProfile">resetWildfireAnalysisProfile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomInterceptProfile` <a name="putCustomInterceptProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomInterceptProfile"></a>

```typescript
public putCustomInterceptProfile(value: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomInterceptProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `putCustomMirroringProfile` <a name="putCustomMirroringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomMirroringProfile"></a>

```typescript
public putCustomMirroringProfile(value: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putCustomMirroringProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `putThreatPreventionProfile` <a name="putThreatPreventionProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile"></a>

```typescript
public putThreatPreventionProfile(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecuritySecurityProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

---

##### `putUrlFilteringProfile` <a name="putUrlFilteringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putUrlFilteringProfile"></a>

```typescript
public putUrlFilteringProfile(value: GoogleNetworkSecuritySecurityProfileUrlFilteringProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putUrlFilteringProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile">GoogleNetworkSecuritySecurityProfileUrlFilteringProfile</a>

---

##### `putWildfireAnalysisProfile` <a name="putWildfireAnalysisProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putWildfireAnalysisProfile"></a>

```typescript
public putWildfireAnalysisProfile(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putWildfireAnalysisProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile</a>

---

##### `resetCustomInterceptProfile` <a name="resetCustomInterceptProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomInterceptProfile"></a>

```typescript
public resetCustomInterceptProfile(): void
```

##### `resetCustomMirroringProfile` <a name="resetCustomMirroringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetCustomMirroringProfile"></a>

```typescript
public resetCustomMirroringProfile(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetThreatPreventionProfile` <a name="resetThreatPreventionProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetThreatPreventionProfile"></a>

```typescript
public resetThreatPreventionProfile(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUrlFilteringProfile` <a name="resetUrlFilteringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetUrlFilteringProfile"></a>

```typescript
public resetUrlFilteringProfile(): void
```

##### `resetWildfireAnalysisProfile` <a name="resetWildfireAnalysisProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetWildfireAnalysisProfile"></a>

```typescript
public resetWildfireAnalysisProfile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecuritySecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecuritySecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfile">customInterceptProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfile">customMirroringProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.urlFilteringProfile">urlFilteringProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.wildfireAnalysisProfile">wildfireAnalysisProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfileInput">customInterceptProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfileInput">customMirroringProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfileInput">threatPreventionProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.urlFilteringProfileInput">urlFilteringProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile">GoogleNetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.wildfireAnalysisProfileInput">wildfireAnalysisProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customInterceptProfile`<sup>Required</sup> <a name="customInterceptProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfile"></a>

```typescript
public readonly customInterceptProfile: GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a>

---

##### `customMirroringProfile`<sup>Required</sup> <a name="customMirroringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfile"></a>

```typescript
public readonly customMirroringProfile: GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `threatPreventionProfile`<sup>Required</sup> <a name="threatPreventionProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfile"></a>

```typescript
public readonly threatPreventionProfile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `urlFilteringProfile`<sup>Required</sup> <a name="urlFilteringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.urlFilteringProfile"></a>

```typescript
public readonly urlFilteringProfile: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference</a>

---

##### `wildfireAnalysisProfile`<sup>Required</sup> <a name="wildfireAnalysisProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.wildfireAnalysisProfile"></a>

```typescript
public readonly wildfireAnalysisProfile: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference</a>

---

##### `customInterceptProfileInput`<sup>Optional</sup> <a name="customInterceptProfileInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customInterceptProfileInput"></a>

```typescript
public readonly customInterceptProfileInput: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `customMirroringProfileInput`<sup>Optional</sup> <a name="customMirroringProfileInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.customMirroringProfileInput"></a>

```typescript
public readonly customMirroringProfileInput: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `threatPreventionProfileInput`<sup>Optional</sup> <a name="threatPreventionProfileInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfileInput"></a>

```typescript
public readonly threatPreventionProfileInput: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecuritySecurityProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlFilteringProfileInput`<sup>Optional</sup> <a name="urlFilteringProfileInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.urlFilteringProfileInput"></a>

```typescript
public readonly urlFilteringProfileInput: GoogleNetworkSecuritySecurityProfileUrlFilteringProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile">GoogleNetworkSecuritySecurityProfileUrlFilteringProfile</a>

---

##### `wildfireAnalysisProfileInput`<sup>Optional</sup> <a name="wildfireAnalysisProfileInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.wildfireAnalysisProfileInput"></a>

```typescript
public readonly wildfireAnalysisProfileInput: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySecurityProfileConfig <a name="GoogleNetworkSecuritySecurityProfileConfig" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileConfig: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the security profile resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.type">type</a></code> | <code>string</code> | The type of security profile. 'WILDFIRE_ANALYSIS' is beta-only. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT", "WILDFIRE_ANALYSIS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customInterceptProfile">customInterceptProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customMirroringProfile">customMirroringProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.description">description</a></code> | <code>string</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.location">location</a></code> | <code>string</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.parent">parent</a></code> | <code>string</code> | The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.urlFilteringProfile">urlFilteringProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile">GoogleNetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | url_filtering_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.wildfireAnalysisProfile">wildfireAnalysisProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile</a></code> | wildfire_analysis_profile block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#name GoogleNetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of security profile. 'WILDFIRE_ANALYSIS' is beta-only. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT", "WILDFIRE_ANALYSIS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#type GoogleNetworkSecuritySecurityProfile#type}

---

##### `customInterceptProfile`<sup>Optional</sup> <a name="customInterceptProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customInterceptProfile"></a>

```typescript
public readonly customInterceptProfile: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_intercept_profile GoogleNetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `customMirroringProfile`<sup>Optional</sup> <a name="customMirroringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.customMirroringProfile"></a>

```typescript
public readonly customMirroringProfile: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_mirroring_profile GoogleNetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#deletion_policy GoogleNetworkSecuritySecurityProfile#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#description GoogleNetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#labels GoogleNetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#location GoogleNetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#parent GoogleNetworkSecuritySecurityProfile#parent}

---

##### `threatPreventionProfile`<sup>Optional</sup> <a name="threatPreventionProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.threatPreventionProfile"></a>

```typescript
public readonly threatPreventionProfile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_prevention_profile GoogleNetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecuritySecurityProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#timeouts GoogleNetworkSecuritySecurityProfile#timeouts}

---

##### `urlFilteringProfile`<sup>Optional</sup> <a name="urlFilteringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.urlFilteringProfile"></a>

```typescript
public readonly urlFilteringProfile: GoogleNetworkSecuritySecurityProfileUrlFilteringProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile">GoogleNetworkSecuritySecurityProfileUrlFilteringProfile</a>

url_filtering_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#url_filtering_profile GoogleNetworkSecuritySecurityProfile#url_filtering_profile}

---

##### `wildfireAnalysisProfile`<sup>Optional</sup> <a name="wildfireAnalysisProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.wildfireAnalysisProfile"></a>

```typescript
public readonly wildfireAnalysisProfile: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile</a>

wildfire_analysis_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_analysis_profile GoogleNetworkSecuritySecurityProfile#wildfire_analysis_profile}

---

### GoogleNetworkSecuritySecurityProfileCustomInterceptProfile <a name="GoogleNetworkSecuritySecurityProfileCustomInterceptProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileCustomInterceptProfile: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>string</code> | The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}. |

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup"></a>

```typescript
public readonly interceptEndpointGroup: string;
```

- *Type:* string

The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#intercept_endpoint_group GoogleNetworkSecuritySecurityProfile#intercept_endpoint_group}

---

### GoogleNetworkSecuritySecurityProfileCustomMirroringProfile <a name="GoogleNetworkSecuritySecurityProfileCustomMirroringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileCustomMirroringProfile: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>string</code> | The target Mirroring Endpoint Group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringDeploymentGroups">mirroringDeploymentGroups</a></code> | <code>string[]</code> | The target downstream Mirroring Deployment Groups. |

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup"></a>

```typescript
public readonly mirroringEndpointGroup: string;
```

- *Type:* string

The target Mirroring Endpoint Group.

When a mirroring rule with this security profile attached matches a packet,
a replica will be mirrored to the location-local target in this group.
Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#mirroring_endpoint_group GoogleNetworkSecuritySecurityProfile#mirroring_endpoint_group}

---

##### `mirroringDeploymentGroups`<sup>Optional</sup> <a name="mirroringDeploymentGroups" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringDeploymentGroups"></a>

```typescript
public readonly mirroringDeploymentGroups: string[];
```

- *Type:* string[]

The target downstream Mirroring Deployment Groups.

This field is used for Packet Broker mirroring endpoint groups to specify
the deployment groups that the packet should be mirrored to by the broker.
Format: projects/{project_id}/locations/global/mirroringDeploymentGroups/{deployment_group_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#mirroring_deployment_groups GoogleNetworkSecuritySecurityProfile#mirroring_deployment_groups}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfile <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileThreatPreventionProfile: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides">antivirusOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>[]</code> | antivirus_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides">severityOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | severity_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides">threatOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | threat_overrides block. |

---

##### `antivirusOverrides`<sup>Optional</sup> <a name="antivirusOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides"></a>

```typescript
public readonly antivirusOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>[]

antivirus_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#antivirus_overrides GoogleNetworkSecuritySecurityProfile#antivirus_overrides}

---

##### `severityOverrides`<sup>Optional</sup> <a name="severityOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides"></a>

```typescript
public readonly severityOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#severity_overrides GoogleNetworkSecuritySecurityProfile#severity_overrides}

---

##### `threatOverrides`<sup>Optional</sup> <a name="threatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides"></a>

```typescript
public readonly threatOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_overrides GoogleNetworkSecuritySecurityProfile#threat_overrides}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action">action</a></code> | <code>string</code> | Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol">protocol</a></code> | <code>string</code> | Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#protocol GoogleNetworkSecuritySecurityProfile#protocol}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action">action</a></code> | <code>string</code> | Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity">severity</a></code> | <code>string</code> | Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#severity GoogleNetworkSecuritySecurityProfile#severity}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action">action</a></code> | <code>string</code> | Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId">threatId</a></code> | <code>string</code> | Vendor-specific ID of a threat to override. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_id GoogleNetworkSecuritySecurityProfile#threat_id}

---

### GoogleNetworkSecuritySecurityProfileTimeouts <a name="GoogleNetworkSecuritySecurityProfileTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileTimeouts: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}.

---

### GoogleNetworkSecuritySecurityProfileUrlFilteringProfile <a name="GoogleNetworkSecuritySecurityProfileUrlFilteringProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileUrlFilteringProfile: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile.property.urlFilters">urlFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>[]</code> | url_filters block. |

---

##### `urlFilters`<sup>Optional</sup> <a name="urlFilters" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile.property.urlFilters"></a>

```typescript
public readonly urlFilters: IResolvable | GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>[]

url_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#url_filters GoogleNetworkSecuritySecurityProfile#url_filters}

---

### GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters <a name="GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.filteringAction">filteringAction</a></code> | <code>string</code> | The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.priority">priority</a></code> | <code>number</code> | The priority of the filter within the URL filtering profile. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.urls">urls</a></code> | <code>string[]</code> | A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable. |

---

##### `filteringAction`<sup>Required</sup> <a name="filteringAction" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.filteringAction"></a>

```typescript
public readonly filteringAction: string;
```

- *Type:* string

The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#filtering_action GoogleNetworkSecuritySecurityProfile#filtering_action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the filter within the URL filtering profile.

Must be an integer from 0 and 2147483647, inclusive. Lower integers indicate higher priorities.
The priority of a filter must be unique within a URL filtering profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#priority GoogleNetworkSecuritySecurityProfile#priority}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable.

A domain name must match with at least one of the strings in the list for a filter to be applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#urls GoogleNetworkSecuritySecurityProfile#urls}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfile: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireInlineCloudAnalysisRules">wildfireInlineCloudAnalysisRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>[]</code> | wildfire_inline_cloud_analysis_rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireInlineMlOverrides">wildfireInlineMlOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>[]</code> | wildfire_inline_ml_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireInlineMlSetting">wildfireInlineMlSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting</a></code> | wildfire_inline_ml_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireOverrides">wildfireOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>[]</code> | wildfire_overrides block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireRealtimeLookup">wildfireRealtimeLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to hold the transfer of a file while the WildFire real-time signature cloud performs a signature lookup. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireSubmissionRules">wildfireSubmissionRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>[]</code> | wildfire_submission_rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireThreatOverrides">wildfireThreatOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>[]</code> | wildfire_threat_overrides block. |

---

##### `wildfireInlineCloudAnalysisRules`<sup>Optional</sup> <a name="wildfireInlineCloudAnalysisRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireInlineCloudAnalysisRules"></a>

```typescript
public readonly wildfireInlineCloudAnalysisRules: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>[]

wildfire_inline_cloud_analysis_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_inline_cloud_analysis_rules GoogleNetworkSecuritySecurityProfile#wildfire_inline_cloud_analysis_rules}

---

##### `wildfireInlineMlOverrides`<sup>Optional</sup> <a name="wildfireInlineMlOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireInlineMlOverrides"></a>

```typescript
public readonly wildfireInlineMlOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>[]

wildfire_inline_ml_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_inline_ml_overrides GoogleNetworkSecuritySecurityProfile#wildfire_inline_ml_overrides}

---

##### `wildfireInlineMlSetting`<sup>Optional</sup> <a name="wildfireInlineMlSetting" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireInlineMlSetting"></a>

```typescript
public readonly wildfireInlineMlSetting: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting</a>

wildfire_inline_ml_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_inline_ml_setting GoogleNetworkSecuritySecurityProfile#wildfire_inline_ml_setting}

---

##### `wildfireOverrides`<sup>Optional</sup> <a name="wildfireOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireOverrides"></a>

```typescript
public readonly wildfireOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>[]

wildfire_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_overrides GoogleNetworkSecuritySecurityProfile#wildfire_overrides}

---

##### `wildfireRealtimeLookup`<sup>Optional</sup> <a name="wildfireRealtimeLookup" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireRealtimeLookup"></a>

```typescript
public readonly wildfireRealtimeLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to hold the transfer of a file while the WildFire real-time signature cloud performs a signature lookup.

Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_realtime_lookup GoogleNetworkSecuritySecurityProfile#wildfire_realtime_lookup}

---

##### `wildfireSubmissionRules`<sup>Optional</sup> <a name="wildfireSubmissionRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireSubmissionRules"></a>

```typescript
public readonly wildfireSubmissionRules: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>[]

wildfire_submission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_submission_rules GoogleNetworkSecuritySecurityProfile#wildfire_submission_rules}

---

##### `wildfireThreatOverrides`<sup>Optional</sup> <a name="wildfireThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile.property.wildfireThreatOverrides"></a>

```typescript
public readonly wildfireThreatOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>[]

wildfire_threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#wildfire_threat_overrides GoogleNetworkSecuritySecurityProfile#wildfire_threat_overrides}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.action">action</a></code> | <code>string</code> | The action to take when a rule is matched. Possible values: ["ALLOW", "DENY", "ALERT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.direction">direction</a></code> | <code>string</code> | Direction of traffic to match for a rule. Possible values: ["UPLOAD", "DOWNLOAD", "BOTH"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.fileSelectionMode">fileSelectionMode</a></code> | <code>string</code> | Defines the file selection mode for a rule. Possible values: ["ALL_FILE_TYPES", "CUSTOM_FILE_TYPES"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.customFileTypes">customFileTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes</a></code> | custom_file_types block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action to take when a rule is matched. Possible values: ["ALLOW", "DENY", "ALERT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction of traffic to match for a rule. Possible values: ["UPLOAD", "DOWNLOAD", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#direction GoogleNetworkSecuritySecurityProfile#direction}

---

##### `fileSelectionMode`<sup>Required</sup> <a name="fileSelectionMode" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.fileSelectionMode"></a>

```typescript
public readonly fileSelectionMode: string;
```

- *Type:* string

Defines the file selection mode for a rule. Possible values: ["ALL_FILE_TYPES", "CUSTOM_FILE_TYPES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_selection_mode GoogleNetworkSecuritySecurityProfile#file_selection_mode}

---

##### `customFileTypes`<sup>Optional</sup> <a name="customFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules.property.customFileTypes"></a>

```typescript
public readonly customFileTypes: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes</a>

custom_file_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_file_types GoogleNetworkSecuritySecurityProfile#custom_file_types}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | The file types to match for a rule. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#wildfireinlinecloudanalysisrule). |

---

##### `fileTypes`<sup>Required</sup> <a name="fileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

The file types to match for a rule. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#wildfireinlinecloudanalysisrule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_types GoogleNetworkSecuritySecurityProfile#file_types}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides.property.action">action</a></code> | <code>string</code> | Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW", "WILDFIRE_ALERT", "WILDFIRE_DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides.property.protocol">protocol</a></code> | <code>string</code> | Required protocol to match. Possible values: ["WILDFIRE_SMTP", "WILDFIRE_SMB", "WILDFIRE_POP3", "WILDFIRE_IMAP", "WILDFIRE_HTTP2", "WILDFIRE_HTTP", "WILDFIRE_FTP"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW", "WILDFIRE_ALERT", "WILDFIRE_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Required protocol to match. Possible values: ["WILDFIRE_SMTP", "WILDFIRE_SMB", "WILDFIRE_POP3", "WILDFIRE_IMAP", "WILDFIRE_HTTP2", "WILDFIRE_HTTP", "WILDFIRE_FTP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#protocol GoogleNetworkSecuritySecurityProfile#protocol}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting.property.fileExceptions">fileExceptions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>[]</code> | file_exceptions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting.property.inlineMlConfigs">inlineMlConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>[]</code> | inline_ml_configs block. |

---

##### `fileExceptions`<sup>Optional</sup> <a name="fileExceptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting.property.fileExceptions"></a>

```typescript
public readonly fileExceptions: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>[]

file_exceptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_exceptions GoogleNetworkSecuritySecurityProfile#file_exceptions}

---

##### `inlineMlConfigs`<sup>Optional</sup> <a name="inlineMlConfigs" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting.property.inlineMlConfigs"></a>

```typescript
public readonly inlineMlConfigs: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>[]

inline_ml_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#inline_ml_configs GoogleNetworkSecuritySecurityProfile#inline_ml_configs}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions.property.partialHash">partialHash</a></code> | <code>string</code> | Machine learning partial hash of the file to exclude from WildFire Inline ML analysis. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions.property.filename">filename</a></code> | <code>string</code> | The file name associated with the partial hash. |

---

##### `partialHash`<sup>Required</sup> <a name="partialHash" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions.property.partialHash"></a>

```typescript
public readonly partialHash: string;
```

- *Type:* string

Machine learning partial hash of the file to exclude from WildFire Inline ML analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#partial_hash GoogleNetworkSecuritySecurityProfile#partial_hash}

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

The file name associated with the partial hash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#filename GoogleNetworkSecuritySecurityProfile#filename}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs.property.action">action</a></code> | <code>string</code> | The action to take for a file type. Possible values: ["DISABLE", "ALERT", "ENABLE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs.property.fileType">fileType</a></code> | <code>string</code> | The file type to match. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#inlinemlfiletype). |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action to take for a file type. Possible values: ["DISABLE", "ALERT", "ENABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

The file type to match. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#inlinemlfiletype).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_type GoogleNetworkSecuritySecurityProfile#file_type}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides.property.action">action</a></code> | <code>string</code> | Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW", "WILDFIRE_ALERT", "WILDFIRE_DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides.property.protocol">protocol</a></code> | <code>string</code> | Required protocol to match. Possible values: ["WILDFIRE_SMTP", "WILDFIRE_SMB", "WILDFIRE_POP3", "WILDFIRE_IMAP", "WILDFIRE_HTTP2", "WILDFIRE_HTTP", "WILDFIRE_FTP"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW", "WILDFIRE_ALERT", "WILDFIRE_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Required protocol to match. Possible values: ["WILDFIRE_SMTP", "WILDFIRE_SMB", "WILDFIRE_POP3", "WILDFIRE_IMAP", "WILDFIRE_HTTP2", "WILDFIRE_HTTP", "WILDFIRE_FTP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#protocol GoogleNetworkSecuritySecurityProfile#protocol}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules.property.direction">direction</a></code> | <code>string</code> | Direction of traffic to match for a rule. Possible values: ["UPLOAD", "DOWNLOAD", "BOTH"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules.property.fileSelectionMode">fileSelectionMode</a></code> | <code>string</code> | Defines the file selection mode for a rule. Possible values: ["ALL_FILE_TYPES", "CUSTOM_FILE_TYPES"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules.property.customFileTypes">customFileTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes</a></code> | custom_file_types block. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction of traffic to match for a rule. Possible values: ["UPLOAD", "DOWNLOAD", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#direction GoogleNetworkSecuritySecurityProfile#direction}

---

##### `fileSelectionMode`<sup>Required</sup> <a name="fileSelectionMode" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules.property.fileSelectionMode"></a>

```typescript
public readonly fileSelectionMode: string;
```

- *Type:* string

Defines the file selection mode for a rule. Possible values: ["ALL_FILE_TYPES", "CUSTOM_FILE_TYPES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_selection_mode GoogleNetworkSecuritySecurityProfile#file_selection_mode}

---

##### `customFileTypes`<sup>Optional</sup> <a name="customFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules.property.customFileTypes"></a>

```typescript
public readonly customFileTypes: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes</a>

custom_file_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#custom_file_types GoogleNetworkSecuritySecurityProfile#custom_file_types}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | The file types to match for a rule. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#wildfiresubmissionrule). |

---

##### `fileTypes`<sup>Required</sup> <a name="fileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

The file types to match for a rule. For allowed values, see [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.securityProfiles#wildfiresubmissionrule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#file_types GoogleNetworkSecuritySecurityProfile#file_types}

---

### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

const googleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides.property.action">action</a></code> | <code>string</code> | Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides.property.threatId">threatId</a></code> | <code>string</code> | Vendor-specific ID of a threat to override. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action override. Possible values: ["WILDFIRE_DEFAULT_ACTION", "WILDFIRE_ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_network_security_security_profile#threat_id GoogleNetworkSecuritySecurityProfile#threat_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput">interceptEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interceptEndpointGroupInput`<sup>Optional</sup> <a name="interceptEndpointGroupInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput"></a>

```typescript
public readonly interceptEndpointGroupInput: string;
```

- *Type:* string

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup"></a>

```typescript
public readonly interceptEndpointGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileCustomInterceptProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomInterceptProfile">GoogleNetworkSecuritySecurityProfileCustomInterceptProfile</a>

---


### GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resetMirroringDeploymentGroups">resetMirroringDeploymentGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMirroringDeploymentGroups` <a name="resetMirroringDeploymentGroups" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resetMirroringDeploymentGroups"></a>

```typescript
public resetMirroringDeploymentGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupType">mirroringEndpointGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroupsInput">mirroringDeploymentGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput">mirroringEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroups">mirroringDeploymentGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup">mirroringEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mirroringEndpointGroupType`<sup>Required</sup> <a name="mirroringEndpointGroupType" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupType"></a>

```typescript
public readonly mirroringEndpointGroupType: string;
```

- *Type:* string

---

##### `mirroringDeploymentGroupsInput`<sup>Optional</sup> <a name="mirroringDeploymentGroupsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroupsInput"></a>

```typescript
public readonly mirroringDeploymentGroupsInput: string[];
```

- *Type:* string[]

---

##### `mirroringEndpointGroupInput`<sup>Optional</sup> <a name="mirroringEndpointGroupInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput"></a>

```typescript
public readonly mirroringEndpointGroupInput: string;
```

- *Type:* string

---

##### `mirroringDeploymentGroups`<sup>Required</sup> <a name="mirroringDeploymentGroups" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroups"></a>

```typescript
public readonly mirroringDeploymentGroups: string[];
```

- *Type:* string[]

---

##### `mirroringEndpointGroup`<sup>Required</sup> <a name="mirroringEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup"></a>

```typescript
public readonly mirroringEndpointGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileCustomMirroringProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileCustomMirroringProfile">GoogleNetworkSecuritySecurityProfileCustomMirroringProfile</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides">putAntivirusOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides">putSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides">putThreatOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides">resetAntivirusOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides">resetSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides">resetThreatOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAntivirusOverrides` <a name="putAntivirusOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides"></a>

```typescript
public putAntivirusOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>[]

---

##### `putSeverityOverrides` <a name="putSeverityOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides"></a>

```typescript
public putSeverityOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---

##### `putThreatOverrides` <a name="putThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides"></a>

```typescript
public putThreatOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---

##### `resetAntivirusOverrides` <a name="resetAntivirusOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides"></a>

```typescript
public resetAntivirusOverrides(): void
```

##### `resetSeverityOverrides` <a name="resetSeverityOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides"></a>

```typescript
public resetSeverityOverrides(): void
```

##### `resetThreatOverrides` <a name="resetThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides"></a>

```typescript
public resetThreatOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides">antivirusOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides">severityOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides">threatOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput">antivirusOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput">severityOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput">threatOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `antivirusOverrides`<sup>Required</sup> <a name="antivirusOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides"></a>

```typescript
public readonly antivirusOverrides: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a>

---

##### `severityOverrides`<sup>Required</sup> <a name="severityOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides"></a>

```typescript
public readonly severityOverrides: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a>

---

##### `threatOverrides`<sup>Required</sup> <a name="threatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides"></a>

```typescript
public readonly threatOverrides: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a>

---

##### `antivirusOverridesInput`<sup>Optional</sup> <a name="antivirusOverridesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput"></a>

```typescript
public readonly antivirusOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides</a>[]

---

##### `severityOverridesInput`<sup>Optional</sup> <a name="severityOverridesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput"></a>

```typescript
public readonly severityOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---

##### `threatOverridesInput`<sup>Optional</sup> <a name="threatOverridesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput"></a>

```typescript
public readonly threatOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput">threatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId">threatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `threatIdInput`<sup>Optional</sup> <a name="threatIdInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput"></a>

```typescript
public readonly threatIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>

---


### GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference <a name="GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

---


### GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters">putUrlFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resetUrlFilters">resetUrlFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUrlFilters` <a name="putUrlFilters" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters"></a>

```typescript
public putUrlFilters(value: IResolvable | GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>[]

---

##### `resetUrlFilters` <a name="resetUrlFilters" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resetUrlFilters"></a>

```typescript
public resetUrlFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFilters">urlFilters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFiltersInput">urlFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile">GoogleNetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlFilters`<sup>Required</sup> <a name="urlFilters" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFilters"></a>

```typescript
public readonly urlFilters: GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList</a>

---

##### `urlFiltersInput`<sup>Optional</sup> <a name="urlFiltersInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFiltersInput"></a>

```typescript
public readonly urlFiltersInput: IResolvable | GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileUrlFilteringProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfile">GoogleNetworkSecuritySecurityProfileUrlFilteringProfile</a>

---


### GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList <a name="GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>[]

---


### GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference <a name="GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resetUrls">resetUrls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrls` <a name="resetUrls" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resetUrls"></a>

```typescript
public resetUrls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringActionInput">filteringActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urlsInput">urlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringAction">filteringAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filteringActionInput`<sup>Optional</sup> <a name="filteringActionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringActionInput"></a>

```typescript
public readonly filteringActionInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urlsInput"></a>

```typescript
public readonly urlsInput: string[];
```

- *Type:* string[]

---

##### `filteringAction`<sup>Required</sup> <a name="filteringAction" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringAction"></a>

```typescript
public readonly filteringAction: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters">GoogleNetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineCloudAnalysisRules">putWildfireInlineCloudAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineMlOverrides">putWildfireInlineMlOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineMlSetting">putWildfireInlineMlSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireOverrides">putWildfireOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireSubmissionRules">putWildfireSubmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireThreatOverrides">putWildfireThreatOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireInlineCloudAnalysisRules">resetWildfireInlineCloudAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireInlineMlOverrides">resetWildfireInlineMlOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireInlineMlSetting">resetWildfireInlineMlSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireOverrides">resetWildfireOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireRealtimeLookup">resetWildfireRealtimeLookup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireSubmissionRules">resetWildfireSubmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireThreatOverrides">resetWildfireThreatOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWildfireInlineCloudAnalysisRules` <a name="putWildfireInlineCloudAnalysisRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineCloudAnalysisRules"></a>

```typescript
public putWildfireInlineCloudAnalysisRules(value: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineCloudAnalysisRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>[]

---

##### `putWildfireInlineMlOverrides` <a name="putWildfireInlineMlOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineMlOverrides"></a>

```typescript
public putWildfireInlineMlOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineMlOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>[]

---

##### `putWildfireInlineMlSetting` <a name="putWildfireInlineMlSetting" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineMlSetting"></a>

```typescript
public putWildfireInlineMlSetting(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireInlineMlSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting</a>

---

##### `putWildfireOverrides` <a name="putWildfireOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireOverrides"></a>

```typescript
public putWildfireOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>[]

---

##### `putWildfireSubmissionRules` <a name="putWildfireSubmissionRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireSubmissionRules"></a>

```typescript
public putWildfireSubmissionRules(value: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireSubmissionRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>[]

---

##### `putWildfireThreatOverrides` <a name="putWildfireThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireThreatOverrides"></a>

```typescript
public putWildfireThreatOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.putWildfireThreatOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>[]

---

##### `resetWildfireInlineCloudAnalysisRules` <a name="resetWildfireInlineCloudAnalysisRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireInlineCloudAnalysisRules"></a>

```typescript
public resetWildfireInlineCloudAnalysisRules(): void
```

##### `resetWildfireInlineMlOverrides` <a name="resetWildfireInlineMlOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireInlineMlOverrides"></a>

```typescript
public resetWildfireInlineMlOverrides(): void
```

##### `resetWildfireInlineMlSetting` <a name="resetWildfireInlineMlSetting" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireInlineMlSetting"></a>

```typescript
public resetWildfireInlineMlSetting(): void
```

##### `resetWildfireOverrides` <a name="resetWildfireOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireOverrides"></a>

```typescript
public resetWildfireOverrides(): void
```

##### `resetWildfireRealtimeLookup` <a name="resetWildfireRealtimeLookup" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireRealtimeLookup"></a>

```typescript
public resetWildfireRealtimeLookup(): void
```

##### `resetWildfireSubmissionRules` <a name="resetWildfireSubmissionRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireSubmissionRules"></a>

```typescript
public resetWildfireSubmissionRules(): void
```

##### `resetWildfireThreatOverrides` <a name="resetWildfireThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.resetWildfireThreatOverrides"></a>

```typescript
public resetWildfireThreatOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineCloudAnalysisRules">wildfireInlineCloudAnalysisRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlOverrides">wildfireInlineMlOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlSetting">wildfireInlineMlSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireOverrides">wildfireOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireSubmissionRules">wildfireSubmissionRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireThreatOverrides">wildfireThreatOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineCloudAnalysisRulesInput">wildfireInlineCloudAnalysisRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlOverridesInput">wildfireInlineMlOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlSettingInput">wildfireInlineMlSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireOverridesInput">wildfireOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireRealtimeLookupInput">wildfireRealtimeLookupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireSubmissionRulesInput">wildfireSubmissionRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireThreatOverridesInput">wildfireThreatOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireRealtimeLookup">wildfireRealtimeLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wildfireInlineCloudAnalysisRules`<sup>Required</sup> <a name="wildfireInlineCloudAnalysisRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineCloudAnalysisRules"></a>

```typescript
public readonly wildfireInlineCloudAnalysisRules: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList</a>

---

##### `wildfireInlineMlOverrides`<sup>Required</sup> <a name="wildfireInlineMlOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlOverrides"></a>

```typescript
public readonly wildfireInlineMlOverrides: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList</a>

---

##### `wildfireInlineMlSetting`<sup>Required</sup> <a name="wildfireInlineMlSetting" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlSetting"></a>

```typescript
public readonly wildfireInlineMlSetting: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference</a>

---

##### `wildfireOverrides`<sup>Required</sup> <a name="wildfireOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireOverrides"></a>

```typescript
public readonly wildfireOverrides: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList</a>

---

##### `wildfireSubmissionRules`<sup>Required</sup> <a name="wildfireSubmissionRules" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireSubmissionRules"></a>

```typescript
public readonly wildfireSubmissionRules: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList</a>

---

##### `wildfireThreatOverrides`<sup>Required</sup> <a name="wildfireThreatOverrides" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireThreatOverrides"></a>

```typescript
public readonly wildfireThreatOverrides: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList</a>

---

##### `wildfireInlineCloudAnalysisRulesInput`<sup>Optional</sup> <a name="wildfireInlineCloudAnalysisRulesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineCloudAnalysisRulesInput"></a>

```typescript
public readonly wildfireInlineCloudAnalysisRulesInput: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>[]

---

##### `wildfireInlineMlOverridesInput`<sup>Optional</sup> <a name="wildfireInlineMlOverridesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlOverridesInput"></a>

```typescript
public readonly wildfireInlineMlOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>[]

---

##### `wildfireInlineMlSettingInput`<sup>Optional</sup> <a name="wildfireInlineMlSettingInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireInlineMlSettingInput"></a>

```typescript
public readonly wildfireInlineMlSettingInput: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting</a>

---

##### `wildfireOverridesInput`<sup>Optional</sup> <a name="wildfireOverridesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireOverridesInput"></a>

```typescript
public readonly wildfireOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>[]

---

##### `wildfireRealtimeLookupInput`<sup>Optional</sup> <a name="wildfireRealtimeLookupInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireRealtimeLookupInput"></a>

```typescript
public readonly wildfireRealtimeLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `wildfireSubmissionRulesInput`<sup>Optional</sup> <a name="wildfireSubmissionRulesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireSubmissionRulesInput"></a>

```typescript
public readonly wildfireSubmissionRulesInput: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>[]

---

##### `wildfireThreatOverridesInput`<sup>Optional</sup> <a name="wildfireThreatOverridesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireThreatOverridesInput"></a>

```typescript
public readonly wildfireThreatOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>[]

---

##### `wildfireRealtimeLookup`<sup>Required</sup> <a name="wildfireRealtimeLookup" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.wildfireRealtimeLookup"></a>

```typescript
public readonly wildfireRealtimeLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfile</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.fileTypesInput">fileTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileTypesInput`<sup>Optional</sup> <a name="fileTypesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.fileTypesInput"></a>

```typescript
public readonly fileTypesInput: string[];
```

- *Type:* string[]

---

##### `fileTypes`<sup>Required</sup> <a name="fileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>[]

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.putCustomFileTypes">putCustomFileTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.resetCustomFileTypes">resetCustomFileTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomFileTypes` <a name="putCustomFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.putCustomFileTypes"></a>

```typescript
public putCustomFileTypes(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.putCustomFileTypes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes</a>

---

##### `resetCustomFileTypes` <a name="resetCustomFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.resetCustomFileTypes"></a>

```typescript
public resetCustomFileTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.customFileTypes">customFileTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.customFileTypesInput">customFileTypesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.fileSelectionModeInput">fileSelectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.fileSelectionMode">fileSelectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customFileTypes`<sup>Required</sup> <a name="customFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.customFileTypes"></a>

```typescript
public readonly customFileTypes: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypesOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `customFileTypesInput`<sup>Optional</sup> <a name="customFileTypesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.customFileTypesInput"></a>

```typescript
public readonly customFileTypesInput: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesCustomFileTypes</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `fileSelectionModeInput`<sup>Optional</sup> <a name="fileSelectionModeInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.fileSelectionModeInput"></a>

```typescript
public readonly fileSelectionModeInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `fileSelectionMode`<sup>Required</sup> <a name="fileSelectionMode" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.fileSelectionMode"></a>

```typescript
public readonly fileSelectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineCloudAnalysisRules</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlOverrides</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>[]

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.resetFilename">resetFilename</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilename` <a name="resetFilename" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.partialHashInput">partialHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.partialHash">partialHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `partialHashInput`<sup>Optional</sup> <a name="partialHashInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.partialHashInput"></a>

```typescript
public readonly partialHashInput: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `partialHash`<sup>Required</sup> <a name="partialHash" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.partialHash"></a>

```typescript
public readonly partialHash: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>[]

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.fileTypeInput"></a>

```typescript
public readonly fileTypeInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.putFileExceptions">putFileExceptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.putInlineMlConfigs">putInlineMlConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.resetFileExceptions">resetFileExceptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.resetInlineMlConfigs">resetInlineMlConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileExceptions` <a name="putFileExceptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.putFileExceptions"></a>

```typescript
public putFileExceptions(value: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.putFileExceptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>[]

---

##### `putInlineMlConfigs` <a name="putInlineMlConfigs" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.putInlineMlConfigs"></a>

```typescript
public putInlineMlConfigs(value: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.putInlineMlConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>[]

---

##### `resetFileExceptions` <a name="resetFileExceptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.resetFileExceptions"></a>

```typescript
public resetFileExceptions(): void
```

##### `resetInlineMlConfigs` <a name="resetInlineMlConfigs" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.resetInlineMlConfigs"></a>

```typescript
public resetInlineMlConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.fileExceptions">fileExceptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.inlineMlConfigs">inlineMlConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.fileExceptionsInput">fileExceptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.inlineMlConfigsInput">inlineMlConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileExceptions`<sup>Required</sup> <a name="fileExceptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.fileExceptions"></a>

```typescript
public readonly fileExceptions: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptionsList</a>

---

##### `inlineMlConfigs`<sup>Required</sup> <a name="inlineMlConfigs" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.inlineMlConfigs"></a>

```typescript
public readonly inlineMlConfigs: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigsList</a>

---

##### `fileExceptionsInput`<sup>Optional</sup> <a name="fileExceptionsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.fileExceptionsInput"></a>

```typescript
public readonly fileExceptionsInput: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingFileExceptions</a>[]

---

##### `inlineMlConfigsInput`<sup>Optional</sup> <a name="inlineMlConfigsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.inlineMlConfigsInput"></a>

```typescript
public readonly inlineMlConfigsInput: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingInlineMlConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireInlineMlSetting</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireOverrides</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.fileTypesInput">fileTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.fileTypes">fileTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileTypesInput`<sup>Optional</sup> <a name="fileTypesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.fileTypesInput"></a>

```typescript
public readonly fileTypesInput: string[];
```

- *Type:* string[]

---

##### `fileTypes`<sup>Required</sup> <a name="fileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.fileTypes"></a>

```typescript
public readonly fileTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>[]

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.putCustomFileTypes">putCustomFileTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.resetCustomFileTypes">resetCustomFileTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomFileTypes` <a name="putCustomFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.putCustomFileTypes"></a>

```typescript
public putCustomFileTypes(value: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.putCustomFileTypes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes</a>

---

##### `resetCustomFileTypes` <a name="resetCustomFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.resetCustomFileTypes"></a>

```typescript
public resetCustomFileTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.customFileTypes">customFileTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.customFileTypesInput">customFileTypesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.fileSelectionModeInput">fileSelectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.fileSelectionMode">fileSelectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customFileTypes`<sup>Required</sup> <a name="customFileTypes" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.customFileTypes"></a>

```typescript
public readonly customFileTypes: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypesOutputReference</a>

---

##### `customFileTypesInput`<sup>Optional</sup> <a name="customFileTypesInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.customFileTypesInput"></a>

```typescript
public readonly customFileTypesInput: GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesCustomFileTypes</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `fileSelectionModeInput`<sup>Optional</sup> <a name="fileSelectionModeInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.fileSelectionModeInput"></a>

```typescript
public readonly fileSelectionModeInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `fileSelectionMode`<sup>Required</sup> <a name="fileSelectionMode" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.fileSelectionMode"></a>

```typescript
public readonly fileSelectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireSubmissionRules</a>

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktn/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.threatIdInput">threatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.threatId">threatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `threatIdInput`<sup>Optional</sup> <a name="threatIdInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.threatIdInput"></a>

```typescript
public readonly threatIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides">GoogleNetworkSecuritySecurityProfileWildfireAnalysisProfileWildfireThreatOverrides</a>

---



